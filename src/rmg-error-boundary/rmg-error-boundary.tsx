import React, { ReactNode, Suspense } from 'react';
import { AlertProps } from '@chakra-ui/react';
import ErrorDetail from './error-detail';

export interface RmgErrorBoundaryProps extends AlertProps {
    children?: ReactNode;
    suspenseFallback?: ReactNode; // for lazy loaded children
}

export class RmgErrorBoundary extends React.Component<RmgErrorBoundaryProps, any> {
    constructor(props: RmgErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: any, errorInfo: any) {
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, errorInfo);
        this.setState({ error, errorInfo });
    }

    render() {
        const { children, suspenseFallback, ...others } = this.props;

        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <ErrorDetail error={this.state.error} errorInfo={this.state.errorInfo} {...others} />;
        }

        return suspenseFallback ? <Suspense fallback={suspenseFallback}>{children}</Suspense> : children;
    }
}
