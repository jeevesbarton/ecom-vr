
import * as React from 'react';

/**
 * If you want to share data between multiple root components, you'll need a
 * global store like Redux. This is similar to building a web app where you
 * want to synchronize data between a sidebar and a main view - just extended
 * into three dimensions.
 * To simplify this sample, we implement a trivial Redux-like store that will
 * ensure all of our elements are synchronized.
 */

const State = {
  products: undefined,
  current: -1,
  collection: 'hats',
  productsInCart: [],
};

const cartItems = [];
const listeners = new Set();

function updateComponents() {
  for (const cb of listeners.values()) {
    cb();
  }
}

export function initialize(apiKey) {
    const entries = [{
      id: "11111",
      name: "Cuyana Panama Hat",
      price: "$85.00",
      description: "The Panama hat is handwoven from 100% straw in Ecuador. This timeless icon is perfect for every occasion.",
      source: "./static_assets/hat1.jpg",
      preview: "./static_assets/hat1.jpg",
      collection: 'hats',
    },
    {
      id: "11112",
      name: "Patagonia Pickup Lines Trucker Hat",
      price: "$14.00",
      description: "The Pickup Lines Trucker Hat features a traditional, structured front ball-cap fit in a trucker setup: organic cotton bill and crown; polyester mesh back for increased ventilation.",
      source: "./static_assets/hat2.jpg",
      preview: "./static_assets/hat2.jpg",
      collection: 'hats',
    },
    {
      id: "11113",
      name: "Outdoor Research Papyrus Brim Sun Hat",
      price: "$24.74",
      description: "This quick-drying, breathable, and lightweight hat features the TransAction headband for moisture-wicking comfort.",
      source: "./static_assets/hat3.jpeg",
      preview: "./static_assets/hat3.jpeg",
      collection: 'hats',
    },
    {
      id: "11114",
      name: "Arc'teryx Patch Trucker Hat",
      price: "$35.00",
      description: "The Arc'teryx Patch Trucker Hat is an adjustable snap-back lid for your head. Add a little shade to your eyes and face with the help of the bill.",
      source: "./static_assets/hat4.png",
      preview: "./static_assets/hat4.png",
      collection: 'hats',
    },
    {
      id: "11115",
      name: "Sunday Afternoons Adventure Hat",
      price: "$39.00",
      description: "Featuring strategic ventilation customizable sizing a 4-inch wide front brim 3.75-inch sides and a 7.5-inch neck flap; the Sunday Afternoons Adventure Hat is the ultimate choice for sun conscience adventurers.",
      source: "./static_assets/hat5.jpeg",
      preview: "./static_assets/hat5.jpeg",
      collection: 'hats',
    },
    {
      id: "21111",
      name: "Sun Dolphin Phoenix 10.4",
      price: "$169.00",
      description: "Adjustable step-lock foot rests for ultimate comfort. Extra large cockpit for easy entry and exit. Ergonomic adjustable padded seat. Rear rubber, extra deep storage compartment.",
      source: "./static_assets/kayak1.jpeg",
      preview: "./static_assets/kayak1.jpeg",
      collection: 'kayaks',
    },
    {
      id: "21112",
      name: "The Holiday Kayak",
      price: "$74.00",
      description: "Lifetime · Recreational · Solid · Sit-inside · 1 Person",
      source: "./static_assets/kayak2.jpeg",
      preview: "./static_assets/kayak2.jpeg",
      collection: 'kayaks',
    },
    {
      id: "21113",
      name: "Pelican Mustang 100X Kayak",
      price: "$279.99",
      description: "Pelican · Recreational · Solid · Sit-inside · 1 Person · 300 lb weight capacity · 10 ft long · 39 lb",
      source: "./static_assets/kayak3.png",
      preview: "./static_assets/kayak3.png",
      collection: 'kayaks',
    },
    {
      id: "21114",
      name: "Sun Dolphin Aruba 12",
      price: "$399.00",
      description: "The Sun Dolphin Aruba 12 Foot SS Lime Sit-In Kayak is comfortable, roomy and handles remarkably well. The Aruba 12 is designed with a heavy duty, dent resistant material.",
      source: "./static_assets/kayak4.jpeg",
      preview: "./static_assets/kayak4.jpeg",
      collection: 'kayaks',
    },
    {
      id: "21115",
      name: "Field & Stream Blade Kayak",
      price: "$229.99",
      description: "Made for your next kayaking adventure, the Field & Stream Blade Kayak boasts plenty of recreational features.",
      source: "./static_assets/kayak5.png",
      preview: "./static_assets/kayak5.png",
      collection: 'kayaks',
    },
    {
      id: "31111",
      name: "Velvet Chair - Upholstered",
      price: "$599.00",
      description: "This low-back, horizontally tufted chair is straight out of a 60s waiting room and honestly, we wouldnt want it any other way.",
      source: "./static_assets/chair1.jpg",
      preview: "./static_assets/chair1.jpg",
      collection: 'chairs',
    },
    {
      id: "31112",
      name: "Blue Velvet Accent Chair",
      price: "$599.99",
      description: "Straight off the Paris runway, circa 1970. Rounded proportions and wooden legs give this lounge chair a stylish edge while its size and comfort make it perfect for small space.",
      source: "./static_assets/chair2.jpg",
      preview: "./static_assets/chair2.jpg",
      collection: 'chairs',
    },
    {
      id: "31113",
      name: "Velvet Chair - Upholstered",
      price: "$599.00",
      description: "This low-back, horizontally tufted chair is straight out of a 60s waiting room and honestly, we wouldnt want it any other way.",
      source: "./static_assets/chair3.jpg",
      preview: "./static_assets/chair3.jpg",
      collection: 'chairs',
    },
    {
      id: "31114",
      name: "Blue Velvet Tufted Chair With Bolsters",
      price: "$799.00",
      description: "Our most popular sofa, reimagined as a large, cozy lounge chair. This modern take on a mid-century classic features clean lines, a tufted seat, and a luxuriously stuffed back.",
      source: "./static_assets/chair4.jpg",
      preview: "./static_assets/chair4.jpg",
      collection: 'chairs',
    },
    {
      id: "31115",
      name: "Dark Gray Accent Armchair",
      price: "$499.00",
      description: "When well-designed worlds collide. Combining the best of Danish and mid-century comes one comfortable, classic, and clean-lined chair.",
      source: "./static_assets/chair5.jpg",
      preview: "./static_assets/chair5.jpg",
      collection: 'chairs',
    },
    {
      id: "41111",
      name: "Unisex Fashion Classics Backpack",
      price: "$26.59",
      description: "100% brand new and high quality.Item Type:Backpack,Students SchoolbagsGender:Men/Women Color: Yellow. Gender: Unisex. Age Group: Adult.",
      source: "./static_assets/backpack1.jpeg",
      preview: "./static_assets/backpack1.jpeg",
      collection: 'backpacks',
    },
    {
      id: "41112",
      name: "Joymoze Waterproof Leisure",
      price: "$19.99",
      description: "Product Description:Guaranteed Quality. All stitching of this backpack is reinforced. Professional and efficient customer support with 7 x 24 x 365 hours.",
      source: "./static_assets/backpack2.jpg",
      preview: "./static_assets/backpack2.jpg",
      collection: 'backpacks',
    },
    {
      id: "41113",
      name: "eBags Professional Slim Laptop",
      price: "$95.99",
      description: "Corporate Casual meets Professional. We've taken a different point of view when it comes to a laptop backpack.",
      source: "./static_assets/backpack3.jpeg",
      preview: "./static_assets/backpack3.jpeg",
      collection: 'backpacks',
    },
    {
      id: "41114",
      name: "Gear-Up Teal Ombre Backpack",
      price: "$49.50",
      description: "Gear up for school days and adventures of all kinds with our best-built backpacks yet. Featuring one-of-a-kind prints drawn by our San Francisco design team.",
      source: "./static_assets/backpack4.jpg",
      preview: "./static_assets/backpack4.jpg",
      collection: 'backpacks',
    },
    {
      id: "41115",
      name: "A.D. SUTTON & SONS",
      price: "$5.97",
      description: "This girls' tribal-print backpack holds her things while projecting fun style. With its unstructured shape and cotton canvas construction, this rucksack maintains a lightweight feel that is enhanced by comfortably cushioned shoulder straps.",
      source: "./static_assets/backpack5.jpeg",
      preview: "./static_assets/backpack5.jpeg",
      collection: 'backpacks',
    }]
    State.products = entries;
    updateComponents();
}

export function setCurrent(value) {
  State.current = value;
  updateComponents();
}

export function setCollection(value) {
  State.collection = value;
  State.current = -1;
  updateComponents();
}

export function addToCart(value) {
  if (cartItems.length <= 5) {
    cartItems.push(value)
  }  
  State.productsInCart = cartItems;
  updateComponents();
}

export function connect(Component) {
  return class Wrapper extends React.Component {
    state = {
      products: State.products,
      current: State.current,
      collection: State.collection,
      productsInCart: State.productsInCart,
    };

    _listener = () => {
      this.setState({
        products: State.products,
        current: State.current,
        collection: State.collection,
        productsInCart: State.productsInCart,
      });
    };

    componentDidMount() {
      listeners.add(this._listener);
    }

    componentWillUnmount() {
      listeners.delete(this._listener);
    }

    render() {
      return (
        <Component
          {...this.props}
          products={this.state.products}
          current={this.state.current}
          collection={this.state.collection}
          productsInCart={this.state.productsInCart}
        />
      );
    }
  };
}
