import React from 'react';
import { render } from '@testing-library/react';
import WorldBadge from 'src/ui/components/WorldBadge';

describe('WorldBadge', () => {
  it('shows a badge for Bologna', () => {
    const { getByAltText } = render(<WorldBadge world="Bologna" />);
    expect(getByAltText("Bologna")).not.toBeNull();
  });

  it('shows a badge for Crit City', () => {
    const { getByAltText } = render(<WorldBadge world="Crit City" />);
    expect(getByAltText("Crit City")).not.toBeNull();
  });

  it('shows a badge for London', () => {
    const { getByAltText } = render(<WorldBadge world="London" />);
    expect(getByAltText("London")).not.toBeNull();
  });

  it('shows a badge for New York', () => {
    const { getByAltText } = render(<WorldBadge world="New York" />);
    expect(getByAltText("New York")).not.toBeNull();
  });

  it('shows a badge for Richmond', () => {
    const { getByAltText } = render(<WorldBadge world="Richmond" />);
    expect(getByAltText("Richmond")).not.toBeNull();
  });

  it('shows a badge for Watopia', () => {
    const { getByAltText } = render(<WorldBadge world="Watopia" />);
    expect(getByAltText("Watopia")).not.toBeNull();
  });

  it('shows a badge for Yorkshire', () => {
    const { getByAltText } = render(<WorldBadge world="Yorkshire" />);
    expect(getByAltText("Yorkshire")).not.toBeNull();
  });

  it('shows a badge if the world is different', () => {
    const { getByAltText } = render(<WorldBadge world="Unknown" />);
    expect(getByAltText("Unknown")).not.toBeNull();
  });
});
