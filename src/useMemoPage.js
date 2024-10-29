import React, {useMemo, useRef} from 'react';

const UseMemoPage = () => {
    const nameRef = useRef();
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const[products, setProducts] = React.useState([]);

    const handleSubmit = () => {
        setProducts([...products, {
            name,
            price: +price
        }]);
        setName('');
        setPrice('');

        nameRef.current.focus();
    }

    const total = useMemo(() => {
        return products.reduce((result, product) => {
            console.log("re-call function");
            return result + product.price;
        }, 0);
    }, [products]);

    return (
        <div>
            <input
                ref={nameRef}
                type="text"
                value={name}
                placeholder="Enter name..."
                onChange={(e) => setName(e.target.value)}
            />
            <br/>

            <input
                type="text"
                value={price}
                placeholder="Enter price..."
                onChange={(e) => setPrice(e.target.value)}
            />
            <button onClick={handleSubmit}>Add</button>
            <br/>

            Total: {total}
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product.name} - {product.price}</li>
                ))}
            </ul>
        </div>
    );
}

export default UseMemoPage;