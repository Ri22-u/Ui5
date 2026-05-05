namespace products;

using { managed } from '@sap/cds/common';

// 1. Category Entity (One-to-Many with Products)
entity Categories :  managed {
    key ID      : String(20);
    name        : String(100);
    description : String(255);
    products    : Association to many Products on products.category = $self;
}

// 2. Supplier Entity (One-to-Many with Products)
entity Suppliers : managed {
    key ID      : String(20);
    companyName : String(100);
    contactName : String(100);
    email       : String(100);
    products    : Association to many Products on products.supplier = $self;
}

// 3. Product Entity (The Main Collection)
entity Products :  managed {
    key ID      : String(20);
    productName : String(100);
    price       : Decimal(10,2);
    stock       : Integer;
    isFinished  : Boolean default false;
    
    // Foreign Keys / Relations
    category    : Association to Categories; 
    supplier    : Association to Suppliers;
}
