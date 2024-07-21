import React from 'react';
import { useTranslation } from 'react-i18next';
import { LocalizationProvider, ModalProvider, ThemeProvider } from '@providers';
import { Button } from '@chakra-ui/react';
import { useShallow } from 'zustand/react/shallow';
import { appStore, modalSelector, ModalID } from '@uiStore';

function App() {
  const { t } = useTranslation();
  const { openModal } = appStore(useShallow(modalSelector));
  return (
    <ThemeProvider>
      <ModalProvider>
        <React.StrictMode>
          <LocalizationProvider>
            <Button onClick={() => openModal(ModalID.SEARCH, () => {})}>
              {t('Click me')}
            </Button>
            <div>{t('App')}</div>
          </LocalizationProvider>
        </React.StrictMode>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
