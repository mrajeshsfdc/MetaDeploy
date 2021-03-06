// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';

import routes from 'utils/routes';
import FourOhFour from 'components/404';
import type { Product as ProductType } from 'store/products/reducer';

const VersionNotFound = ({ product }: { product: ProductType }) => (
  <FourOhFour
    message={
      product.most_recent_version ? (
        <Trans i18nKey="versionNotFoundMostRecent">
          We can’t find the version you’re looking for. Try the{' '}
          <Link
            to={routes.version_detail(
              product.slug,
              product.most_recent_version.label,
            )}
          >
            most recent version
          </Link>{' '}
          of that product, or the{' '}
          <Link to={routes.product_list()}>list of all products</Link>?
        </Trans>
      ) : (
        <Trans i18nKey="versionNotFound">
          We can’t find the version you’re looking for. Try the{' '}
          <Link to={routes.product_list()}>list of all products</Link>?
        </Trans>
      )
    }
  />
);

export default VersionNotFound;
