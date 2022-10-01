import React, { RefObject } from 'react';
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

interface WarningDialogProps {
    cancelRef: RefObject<HTMLButtonElement>;
    isOpen: boolean;
    onClose: () => void;
}

export default function WarningDialog(props: WarningDialogProps) {
    const { cancelRef, isOpen, onClose } = props;

    const handleConfirm = () => {
        rmgRuntime.clearStorageForCurrentApp();
        window.location.reload();
    };

    return (
        <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
            <AlertDialogOverlay />

            <AlertDialogContent>
                <AlertDialogHeader>Warning 警告</AlertDialogHeader>
                <AlertDialogCloseButton />
                <AlertDialogBody sx={{ '& p': { my: 1 } }}>
                    <Text>
                        Are you sure you want to reset the app? The webpage local storage for this app will be cleared
                        and any unsaved work cannot be recovered.
                    </Text>

                    <Text>確定重設該應用程式嗎？應用程式的網頁本地儲存將會被清除，未儲存的項目將無法被復原。</Text>

                    <Text>确定重置本应用程序吗？应用程序的网页本地存储将会被清除，未保存的项目将无法被还原。</Text>
                </AlertDialogBody>
                <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button colorScheme="red" ml={3} onClick={handleConfirm}>
                        Confirm and reload
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
