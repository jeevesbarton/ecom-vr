import {ReactInstance, Location, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  const leftPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
  leftPanel.setAngle(-0.6, 0);

  const rightPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
  rightPanel.setAngle(0.6, 0);

  const bottomPanel = new Surface(450, 300, Surface.SurfaceShape.Flat);
  bottomPanel.setAngle(0, -0.8);

  const cartPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
  cartPanel.setAngle(1.04, 0);

  const checkoutPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
  checkoutPanel.setAngle(0, 0);

  r360.renderToSurface(
    r360.createRoot('Products'),
    leftPanel,
  );
  r360.renderToSurface(
    r360.createRoot('CurrentProductDetails'),
    rightPanel,
  );
  r360.renderToSurface(
    r360.createRoot('CollectionsList'),
    bottomPanel,
  );
  r360.renderToSurface(
    r360.createRoot('Cart'),
    cartPanel,
  );
  r360.renderToSurface(
    r360.createRoot('Checkout'),
    checkoutPanel,
  );
  r360.renderToLocation(
    r360.createRoot('SelectedProduct'),
    new Location([0, -2, -10]),
  );

  // r360.compositor.setBackground('./static_assets/test2.jpg');
  r360.compositor.setBackground('./static_assets/bg4.jpg', {
    format: '2D',
  });
}

window.React360 = {init};
