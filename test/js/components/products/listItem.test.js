import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from 'react-testing-library';

import ProductItem from 'components/products/listItem';

describe('<ProductItem />', () => {
  const setup = initialState => {
    const { getByText, queryByText } = render(
      <MemoryRouter>
        <>
          {initialState.products.map(item => (
            <ProductItem item={item} key={item.id} />
          ))}
        </>
      </MemoryRouter>,
    );
    return { getByText, queryByText };
  };

  test('renders product', () => {
    const initialState = {
      products: [
        {
          id: 'p1',
          title: 'Product 1',
          description: 'This is a test product.',
          short_description: 'I am short.',
          category: 'salesforce',
          icon: {
            type: 'url',
            url: 'http://foo.bar',
          },
          most_recent_version: {
            id: 'v1',
            product: 'p1',
            label: '1.0.0',
            description: 'This is a test product version.',
            primary_plan: {
              id: 'plan-1',
              title: 'My Plan',
            },
            additional_plans: [],
          },
        },
        {
          id: 'p2',
          title: 'Product 2',
          description: 'This is a test product.',
          category: 'salesforce',
          most_recent_version: null,
        },
      ],
    };
    const { getByText, queryByText } = setup(initialState);

    expect(getByText('Product 1')).toBeVisible();
    expect(getByText('I am short.')).toBeVisible();
    expect(queryByText('Product 2')).toBeNull();
    expect(queryByText('This is a test product')).toBeNull();
  });
});
