import { render, screen } from '@testing-library/react';
import { afterEach, expect, it, vi } from 'vitest';
import Health from './Health';

afterEach(() => vi.unstubAllGlobals());

it('shows the body of /healthz', async () => {
    vi.stubGlobal(
        'fetch',
        vi.fn().mockResolvedValue({ json: async () => ({ status: 'ok' }) }),
    );

    render(<Health />);

    expect(screen.getByText(/carregando/)).toBeInTheDocument();
    expect(await screen.findByText(/"status":"ok"/)).toBeInTheDocument();
    expect(fetch).toHaveBeenCalledWith('/api/healthz')
});
