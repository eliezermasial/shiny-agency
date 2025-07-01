import { render } from '@testing-library/react';
import Footer from './';
import { ThemeProvider } from '../../utils/Context' // ajuste le chemin selon ton projet

describe('Footer', () => {
    test('Should render without crash', async () => {

        render(
            <ThemeProvider>
                <Footer />
            </ThemeProvider>
        )
    })
})
