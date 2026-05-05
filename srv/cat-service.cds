using products as my from '../db/schema';

service CatalogService {
    @odata.draft.enabled
    entity Products as projection on my.Products;
    
    entity Categories as projection on my.Categories;
    entity Suppliers as projection on my.Suppliers;
}
