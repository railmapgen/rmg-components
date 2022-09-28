import React from 'react';
import { Alert, AlertDescription, AlertIcon, AlertProps, AlertTitle, Text } from '@chakra-ui/react';
import rmgRuntime from '@railmapgen/rmg-runtime';

interface ErrorDetailProps extends AlertProps {
    error: any;
    errorInfo: any;
}

export default function ErrorDetail(props: ErrorDetailProps) {
    const { error, errorInfo, ...others } = props;

    const component = rmgRuntime.getAppName();
    const linkEl = (
        <a
            href={`https://github.com/railmapgen/${component}/issues`}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'underline' }}
        >
            GitHub Issue
        </a>
    );

    return (
        <Alert status="error" flexDirection="column" alignItems="center" justifyContent="center" {...others}>
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
                Something went wrong!
            </AlertTitle>

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

                <details style={{ whiteSpace: 'pre-wrap' }}>
                    {error?.toString()}
                    <br />
                    {errorInfo?.componentStack}
                </details>
            </AlertDescription>
        </Alert>
    );
}
