interface GlobalData {
  id: number;
  title: string;
  logo: Image;
  address: {
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    countryCode: string;
    locality: string;
    postalCode: number;
    title: string;
  };
}

interface Category {
  id: number;
  title: string;
}
