import React from 'react';
import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertProps,
    AlertTitle,
    Link,
    Text,
    useColorModeValue,
    useStyleConfig,
} from '@chakra-ui/react';
import rmgRuntime from '@railmapgen/rmg-runtime';

interface ErrorDetailProps extends AlertProps {
    error: any;
    errorInfo: any;
}

export default function ErrorDetail(props: ErrorDetailProps) {
    const { error, errorInfo, sx, ...others } = props;

    const styles = useStyleConfig('RmgErrorBoundary');
    const linkColour = useColorModeValue('primary.500', 'primary.300');

    const component = rmgRuntime.getAppName();
    const linkEl = (
        <Link color={linkColour} href={`https://github.com/railmapgen/${component}/issues`} isExternal={true}>
            GitHub Issue
        </Link>
    );

    return (
        <Alert status="error" sx={{ ...styles, ...sx }} {...others}>
            <AlertIcon />
            <AlertTitle>Something went wrong!</AlertTitle>

            <AlertDescription>
                <Text>
                    Please try to refresh or re-import your configuration files. If the issue still persists, please
                    consider upgrading your browser or submit an issue in {linkEl} with the detail shown above.
                </Text>

                <Text>
                    請嘗試重新整理或重新上載設定檔。如果問題仍然存在，請考慮更新你的瀏覽器，或前往 {linkEl} 提交一個
                    Issue 並附上詳情。
                </Text>

                <Text>
                    请尝试刷新或重新上传配置文件。如果问题仍然存在，请考虑更新您的浏览器，或前往 {linkEl} 提交一个 Issue
                    并附上详细信息。
                </Text>

                <details>
                    {error?.toString()}
                    <br />
                    {errorInfo?.componentStack}
                </details>
            </AlertDescription>
        </Alert>
    );
}
