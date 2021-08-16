import Product from "./Product";

function ProductFeed({ products }) {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
            
            {/* shows first 4 products */}
 
                {/* Product 1 */}
                <Product 
                    key="49538094"
                    id="49538094"
                    title="Milk" 
                    price={50} 
                    description="Expiry: in 3 days"
                    category="Dairy"
                    image="https://i.imgur.com/veoq3w7.jpg" 
                />

                {/* Product 2 */}
                <Product 
                    key="24567834"
                    id="24567834"
                    title="Amul Ghee" 
                    price={500} 
                    description="Expiry: in 2 months"
                    category="Dairy"
                    image="https://i.imgur.com/wsOwq5a.jpg" 
                />

                {/* Product 3 */}
                <Product 
                    key="89056731"
                    id="89056731"
                    title="Bread" 
                    price={30} 
                    description="Expiry: in 1 week"
                    category="Grains"
                    image="https://i.imgur.com/DH3rVjx.png" 
                />

                {/* Product 4 */}
                <Product 
                    key="89567234"
                    id="89567234"
                    title="Dairy Milk Silk" 
                    price={75} 
                    description="Expiry: in 1 month"
                    category="Sweets"
                    image="https://i.imgur.com/T0hFk9b.png" 
                />


            {/* shows advetisment */}
            <img 
                className="md:col-span-full" 
                src="https://i.imgur.com/gVF3WeX.png" 
                alt="" 
            />

            {/* shows next object that can span ipto 2 col */}
            <div className="md:col-span-2">
                {/* Product 5 */}
                <Product 
                    key="34512790"
                    id="34512790"
                    title="Oreo" 
                    price={20} 
                    description="Expiry: in 1 month"
                    category="Biscuits"
                    image="https://i.imgur.com/5GQFApw.jpg" 
                />

            </div>

            {/* shows rest of the products */}
            
                {/* Product 6 */}
                <Product 
                    key="67894532"
                    id="67894532"
                    title="Amul Butter" 
                    price={50} 
                    description="Expiry: 3 weeks"
                    category="Dairy"
                    image="https://i.imgur.com/JtyZt9M.jpg" 
                />

                {/* Product 7 */}
                <Product 
                    key="87107712"
                    id="87107712"
                    title="Maggi" 
                    price={20} 
                    description="Expiry: in 2 months"
                    category="Snacks"
                    image="https://i.imgur.com/QlyLUDx.jpg" 
                />

                {/* Product 8 */}
                <Product 
                    key="87107711"
                    id="87107711"
                    title="Aloo Tikki" 
                    price={150} 
                    description="Expiry: in 2 months"
                    category="Snacks"
                    image="https://i.imgur.com/tWFpjZi.jpg" 
                />

                {/* Product 9 */}
                <Product 
                    key="87107710"
                    id="87107710"
                    title="Sugar" 
                    price={300} 
                    description="Expiry: in 1 month"
                    category="Grocery"
                    image="https://i.imgur.com/dMs8SOQ.jpg" 
                />

                {/* Product 10 */}
                <Product 
                    key="87107709"
                    id="87107709"
                    title="Aashirvaad Atta" 
                    price={700} 
                    description="Expiry: in 3 months"
                    category="Grains"
                    image="https://i.imgur.com/VfoGFi1.jpg" 
                />


                {/* Product 11 */}
                <Product 
                    key="34512784"
                    id="34512784"
                    title="Kellogg's Chocos" 
                    price={200} 
                    description="Expiry: in 2 months"
                    category="Cereal"
                    image="https://i.imgur.com/nrftukJ.jpg" 
                />

                {/* Product 12 */}
                <Product 
                    key="87107705"
                    id="87107705"
                    title="Channa" 
                    price={120} 
                    description="Expiry: in 2 months"
                    category="Pulses"
                    image="https://i.imgur.com/Z2uhcdq.jpg" 
                />

                {/* Product 13 */}
                <Product 
                    key="87107706"
                    id="87107706"
                    title="Lays" 
                    price={20} 
                    description="Expiry: in 1 month"
                    category="Snacks"
                    image="https://i.imgur.com/1EDMkss.jpg" 
                />

                {/* Product 14 */}
                <Product 
                    key="87107707"
                    id="87107707"
                    title="Coca-Cola" 
                    price={40} 
                    description="Expiry: in 2 weeks"
                    category="Drinks"
                    image="https://i.imgur.com/d6urxM4.jpg" 
                />

                {/* Product 15 */}
                <Product 
                    key="87107708"
                    id="87107708"
                    title="Red-Label" 
                    price={170} 
                    description="Expiry: in 3 weeks"
                    category="Drinks"
                    image="https://i.imgur.com/HarsyFs.jpg" 
                />

        </div>
    )
}

export default ProductFeed
