import { RefObject, useState } from 'react';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogCloseButton,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
    Text,
} from '@chakra-ui/react';
import rmgRuntime from '@railmapgen/rmg-runtime';
import { downloadAs } from '../util/utils';

interface WarningDialogProps {
    cancelRef: RefObject<HTMLButtonElement>;
    isOpen: boolean;
    onClose: () => void;
}

export default function WarningDialog(props: WarningDialogProps) {
    const { cancelRef, isOpen, onClose } = props;

    const [isConfirmButtonLoading, setIsConfirmButtonLoading] = useState(false);

    const handleConfirm = () => {
        setIsConfirmButtonLoading(true);

        // dump
        const storage = rmgRuntime.getStorageForCurrentApp();
        const appName = rmgRuntime.getAppName();
        const fileName = `${appName}_BACKUP_${new Date().toISOString()}.json`;
        downloadAs(fileName, 'application/json', JSON.stringify(storage));

        // clear
        rmgRuntime.clearStorageForCurrentApp();

        setTimeout(() => {
            window.location.reload();
        }, 2000);
    };

    return (
        <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
            <AlertDialogOverlay />

            <AlertDialogContent>
                <AlertDialogHeader>Warning 警告</AlertDialogHeader>
                <AlertDialogCloseButton />
                <AlertDialogBody sx={{ '& p': { my: 1 } }}>
                    <Text>
                        Are you sure you want to reset the app? The webpage local storage for this app will be cleared.
                        A copy of the local storage will be downloaded and it may be used for restoration (varies with
                        app).
                    </Text>

                    <Text>
                        確定重設該應用程式嗎？應用程式的網頁本地儲存將會被清除。本地儲存的副本可供下載及用於復原（因應用程式而異）。
                    </Text>

                    <Text>
                        确定重置本应用程序吗？应用程序的网页本地存储将会被清除。本地存储的拷贝可供下载以及用于还原（因应用程序而異）。
                    </Text>
                </AlertDialogBody>
                <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button isLoading={isConfirmButtonLoading} colorScheme="red" ml={3} onClick={handleConfirm}>
                        Confirm and reload
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
