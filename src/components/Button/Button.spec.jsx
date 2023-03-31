import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './index';

describe('<Button />', () => {
    it('text', () => {
        render(<Button text='load more'/>);

        const button = screen.getByRole('button', {name: /load more/i });
        expect(button).toBeInTheDocument();
    });

    it('Should call function on button click', () => {
        const fn = jest.fn();
        render(<Button text="load more" onClick={fn}/>);

        const button = screen.getByRole('button', {name: /load more/i });
        fireEvent.click(button);
        expect(fn).toHaveBeenCalledTimes(1);
    })
});