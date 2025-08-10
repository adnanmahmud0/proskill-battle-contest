const products = [
    {
        product: 'Apple iMac 27"',
        image: 'https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png',
        category: 'Desktop PC',
        stock: 95,
        stockColor: 'red-700',
        salesDay: 1.47,
        salesMonth: 0.47,
        rating: 5.0,
        sales: '1.6M',
        revenue: '$3.2M',
        lastUpdate: 'Just now'
    },
    {
        product: 'Apple iMac 20"',
        image: 'https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png',
        category: 'Desktop PC',
        stock: 108,
        stockColor: 'red-700',
        salesDay: 1.15,
        salesMonth: 0.32,
        rating: 5.0,
        sales: '6M',
        revenue: '$785K',
        lastUpdate: 'This week'
    },
    {
        product: 'Apple iPhone 14',
        image: 'https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/apple-iphone-14.png',
        category: 'Phone',
        stock: 24,
        stockColor: 'green-400',
        salesDay: 1.00,
        salesMonth: 0.95,
        rating: 4.0,
        sales: '1.2M',
        revenue: '$3.2M',
        lastUpdate: 'Just now'
    },
    {
        product: 'Apple iPad Air',
        image: 'https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/apple-ipad-air.png',
        category: 'Tablet',
        stock: 287,
        stockColor: 'red-500',
        salesDay: 0.47,
        salesMonth: 1.00,
        rating: 4.0,
        sales: '298K',
        revenue: '$425K',
        lastUpdate: 'Just now'
    },
    {
        product: 'Xbox Series S',
        image: 'https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/xbox-series-s.png',
        category: 'Console',
        stock: 450,
        stockColor: 'yellow-300',
        salesDay: 1.61,
        salesMonth: 0.30,
        rating: 5.0,
        sales: '99',
        revenue: '$345K',
        lastUpdate: 'This week'
    },
    {
        product: 'PlayStation 5',
        image: 'https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/playstation-5.png',
        category: 'Console',
        stock: 2435,
        stockColor: 'green-400',
        salesDay: 1.41,
        salesMonth: 0.11,
        rating: 4.0,
        sales: '2.1M',
        revenue: '$4.2M',
        lastUpdate: 'This week'
    },
    {
        product: 'Xbox Series X',
        image: 'https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/xbox-series-x.png',
        category: 'Gaming/Console',
        stock: 235,
        stockColor: 'orange-500',
        salesDay: 7.09,
        salesMonth: 3.32,
        rating: 5.0,
        sales: '989K',
        revenue: '$2.27M',
        lastUpdate: 'This week'
    },
    {
        product: 'Apple Watch SE',
        image: 'https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/apple-watch-se.png',
        category: 'Watch',
        stock: 433,
        stockColor: 'yellow-300',
        salesDay: 4.96,
        salesMonth: 0.74,
        rating: 5.0,
        sales: '102',
        revenue: '$45K',
        lastUpdate: '2 weeks ago'
    },
    {
        product: 'NIKON D850',
        image: 'https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/nikon-d850.png',
        category: 'Photo/Video',
        stock: 351,
        stockColor: 'orange-400',
        salesDay: 0.20,
        salesMonth: 0.74,
        rating: 3.0,
        sales: '1.2M',
        revenue: '$1.52M',
        lastUpdate: '3 weeks ago'
    },
    {
        product: 'Monitor BenQ EX2710Q',
        image: 'https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/benq-ex2710q.png',
        category: 'TV/Monitor',
        stock: 1242,
        stockColor: 'green-500',
        salesDay: 4.12,
        salesMonth: 0.30,
        rating: 4.0,
        sales: '211K',
        revenue: '$1.2M',
        lastUpdate: 'Just now'
    }
];

const ProductTable = () => {
    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <svg
                    key={i}
                    aria-hidden="true"
                    className={`w-5 h-5 ${i <= rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-500'}`}
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            );
        }
        return stars;
    };

    return (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="p-4">
                        <div className="flex items-center">
                            <input id="checkbox-all" type="checkbox" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                        </div>
                    </th>
                    <th scope="col" className="px-4 py-3">Product</th>
                    <th scope="col" className="px-4 py-3">Category</th>
                    <th scope="col" className="px-4 py-3">Stock</th>
                    <th scope="col" className="px-4 py-3">Sales/Day</th>
                    <th scope="col" className="px-4 py-3">Sales/Month</th>
                    <th scope="col" className="px-4 py-3">Rating</th>
                    <th scope="col" className="px-4 py-3">Sales</th>
                    <th scope="col" className="px-4 py-3">Revenue</th>
                    <th scope="col" className="px-4 py-3">Last Update</th>
                </tr>
            </thead>
            <tbody>
                {products.map((item, index) => (
                    <tr key={index} className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td className="w-4 px-4 py-3">
                            <div className="flex items-center">
                                <input id={`checkbox-table-search-${index + 1}`} type="checkbox" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor={`checkbox-table-search-${index + 1}`} className="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row" className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <img src={item.image} alt={`${item.product} Image`} className="w-auto h-8 mr-3" />
                            {item.product}
                        </th>
                        <td className="px-4 py-2">
                            <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">{item.category}</span>
                        </td>
                        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <div className="flex items-center">
                                <div className={`inline-block w-4 h-4 mr-2 bg-${item.stockColor} rounded-full`}></div>
                                {item.stock}
                            </div>
                        </td>
                        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.salesDay}</td>
                        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.salesMonth}</td>
                        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <div className="flex items-center">
                                {renderStars(item.rating)}
                                <span className="ml-1 text-gray-500 dark:text-gray-400">{item.rating}</span>
                            </div>
                        </td>
                        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 mr-2 text-gray-400" aria-hidden="true">
                                    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                                </svg>
                                {item.sales}
                            </div>
                        </td>
                        <td className="px-4 py-2">{item.revenue}</td>
                        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.lastUpdate}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProductTable;