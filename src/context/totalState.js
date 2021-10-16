import TotalContext from "./totalContext";
import React from "react";
const TotalState = (props) => {
  const initialtotal = {
    wealth: 101800000000,
    bill: 0,
  };

  const [total, settotal] = React.useState(initialtotal);

  const productsarray = [
    {
      name: "PS5",
      price: 499,
      url: "https://i.imgur.com/0KSqKXn.jpg",
    },
    {
      name: "nintendo Switch",
      price: 299,
      url: "https://i.imgur.com/0FO7MMz.jpg",
    },
    {
      name: "X Box Series X",
      price: 499,
      url: "https://i.imgur.com/NZ6ySwj.jpg",
    },
    {
      name: "Ultimate Gaming PC ",
      price: 4950,
      url: "https://i.imgur.com/LVouJCx.jpg",
    },
    {
      name: "1000 Acres of land ",
      price: 4100000,
      url: "https://i.imgur.com/uhKbVhH.jpg",
    },
    {
      name: "Eating out for 80 years (4 meals/day) ",
      price: 3100000,
      url: "https://i.imgur.com/sm3cSP5.jpg",
    },
    {
      name: "Private Island, Central America (medium size) ",
      price: 4950000,
      url: "https://i.imgur.com/1am1OfX.jpg",
    },

    {
      name: "M1 Abrams ",
      price: 8000000,
      url: "https://i.imgur.com/TZP2OgW.jpg",
    },
    {
      name: "Produce a Hollywood Movie",
      price: 90000000,
      url: "https://i.imgur.com/JnQxbcn.jpg",
    },

    {
      name: "Antilia",
      price: 2000000000,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mumbai_03-2016_19_Antilia_Tower.jpg/240px-Mumbai_03-2016_19_Antilia_Tower.jpg",
    },
    {
      name: "NBA Team (Average)",
      price: 2400000000,
      url: "https://i.imgur.com/jNK0U47.jpg",
    },
    {
      name: "Mega Yatch",
      price: 90000000,
      url: "https://i.imgur.com/TGQFkeb.jpg",
    },
    {
      name: "IPL Team(average)",
      price: 350000000,
      url: "https://www.jagranimages.com/images/newimg/21082020/21_08_2020-ipl_logo_20650553.jpg",
    },
    {
      name: "One week in EVERY country of the planet",
      price: 1250000,
      url: "https://i.imgur.com/CFjtIjN.jpg",
    },
    {
      name: "Diamond Ring (Tiffany - 1 carat)",
      price: 17000,
      url: "https://i.imgur.com/3AkEw9K.jpg",
    },
    {
      name: "Rolex",
      price: 12000,
      url: "https://i.imgur.com/YzLqM8c.jpg",
    },

    {
      name: "10 plastic surgeries",
      price: 130000,
      url: "https://i.imgur.com/We5W9mt.jpg",
    },
    {
      name: "College Education (USA)",
      price: 170000,
      url: "https://i.imgur.com/nX6YLXf.jpg",
    },
    {
      name: "NFL Team (Average)",
      price: 3000000000,
      url: "https://i.imgur.com/bjHflAC.jpg",
    },
    {
      name: "Jet Gulfstream G450",
      price: 17000000,
      url: "https://i.imgur.com/rfaTKtE.jpg",
    },

    {
      name: "Modern Building (35 condos + 10 Offices)",
      price: 12000000,
      url: "https://i.imgur.com/gqBAmHe.jpg",
    },
    {
      name: "Regular Apartment (2 bd, 2 ba)",
      price: 280000,
      url: "https://i.imgur.com/6O3q6qR.jpg",
    },
    {
      name: "L.A Home (5bd, 6ba)",
      price: 6000000,
      url: "https://i.imgur.com/LGEsG2k.png",
    },
    {
      name: "Paris Luxury Apartment(3 bd, 4 ba)",
      price: 3000000,
      url: "https://i.imgur.com/XpJY8RR.jpg",
    },
  ];

  //format money function
  const formater = (price) => {
    let dollarUS = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    return dollarUS.format(price);
  };
  //percentage money used

  const perMoneyUsed = () => {
    var perleft = total.wealth / 1018000000;
    var perSpent = 100 - perleft;
    //  perSpent.toFixed(9);
    var value = parseFloat(perSpent).toFixed(6);

    return value;
  };

  //receipt "
  let initialreceitArray= [
    {
      name: "PS5",
      price: 499,
      count: 0,
    },
    {
      name: "nintendo Switch",
      price: 299,
      count: 0,
    },
    {
      name: "X Box Series X",
      price: 499,
      count: 0,
    },
    {
      name: "Ultimate Gaming PC ",
      price: 4950,
      count: 0,
    },
    {
      name: "1000 Acres of land ",
      price: 4100000,
      count: 0,
    },
    {
      name: "Eating out for 80 years (4 meals/day) ",
      price: 3100000,
      count: 0,
    },
    {
      name: "Private Island, Central America (medium size) ",
      price: 4950000,
      count: 0,
    },

    {
      name: "M1 Abrams ",
      price: 8000000,
      count: 0,
    },
    {
      name: "Produce a Hollywood Movie",
      price: 90000000,
      count: 0,
    },

    {
      name: "Antilia",
      price: 2000000000,
      count: 0,
    },
    {
      name: "NBA Team (Average)",
      price: 2400000000,
      count: 0,
    },
    {
      name: "Mega Yatch",
      price: 90000000,
      count: 0,
    },
    {
      name: "IPL Team(average)",
      price: 350000000,
      count: 0,
    },
    {
      name: "One week in EVERY country of the planet",
      price: 1250000,
      count: 0,
    },
    {
      name: "Diamond Ring (Tiffany - 1 carat)",
      price: 17000,
      count: 0,
    },
    {
      name: "Rolex",
      price: 12000,
      count: 0,
    },

    {
      name: "10 plastic surgeries",
      price: 130000,
      count: 0,
    },
    {
      name: "College Education (USA)",
      price: 170000,
      count: 0,
    },
    {
      name: "NFL Team (Average)",
      price: 3000000000,
      count: 0,
    },
    {
      name: "Jet Gulfstream G450",
      price: 17000000,
      count:0
    },

    {
      name: "Modern Building (35 condos + 10 Offices)",
      price: 12000000,
      count: 0,
    },
    {
      name: "Regular Apartment (2 bd, 2 ba)",
      price: 280000,
      count: 0,
    },
    {
      name: "L.A Home (5bd, 6ba)",
      price: 6000000,
      count: 0,
    },
    {
      name: "Paris Luxury Apartment(3 bd, 4 ba)",
      price: 3000000,
      count: 0,
    },
  ];

const [receitArray] = React.useState(initialreceitArray);
  const receitCountIncUpdater = (name) => {
    for (let i = 0; i < receitArray.length; i++) {
      const element = receitArray[i];
     
      if (element.name === name) {
        // console.log(element.name)
        element.count += 1;
      };
    }
  };
  const receitCountDncUpdater = (name) => {
    for (let i = 0; i < receitArray.length; i++) {
      const element = receitArray[i];
      
      if (element.name === name) {
        // console.log(name)
        element.count -= 1;
      };
    }
  };

  //print function
  function printSection(el) {
    let printsection = document.getElementById(el).innerHTML;
    document.body.innerHTML = printsection;
  
    window.print();
  }
  return (
    <TotalContext.Provider
      value={{
        total,
        settotal,
        productsarray,
        formater,
        perMoneyUsed,
        receitArray,
        receitCountIncUpdater,
        receitCountDncUpdater,
        printSection
      }}
    >
      {props.children}
    </TotalContext.Provider>
  );
};

export default TotalState;
