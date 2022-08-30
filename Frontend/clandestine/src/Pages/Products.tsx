import {useQuery, gql} from "@apollo/client";
import {motion} from 'framer-motion';
interface Product{
    title:string
    price:number,
    description:string
}

// noinspection GraphQLUnresolvedReference
const productQuery = gql`
    query Query {
        products {
            title
            price
            description
        }
    }`
const container = {
    hidden: {
        opacity:1,
        height:0,
        transition:{
            staggerChildren: .0325
        }
    },
    visible: {
        opacity: 1,
        height: "auto",
        transition: {
            type: "spring", bounce: 0.2,
            duration: 0.7,
            staggerChildren: .0325
        }
    }
};
const variants = {
    hidden: {
        y: "200%",
        transition:{
            type:'spring', duration:0.5
        }
    },
    visible:(index:number)=>{
        return {
            y:0,
            transition:{
                type:'spring', duration:0.5,
                delay: index/10*0.4
            }
        }
    }
}
const Products = () =>{
    const {error, loading, data} = useQuery(productQuery);
    if (error) return <p>"Error loading products"</p>;
    if (loading) return <p>Loading...</p>
    return(
        <motion.div
            transition={{
                staggerChildren:0.045
            }}
            animate={{}}
            variants={container}
            style={{overflow:'hidden', display: 'flex', flexWrap: "wrap"}}
            >
            {data.products.map((item:Product, index:number)=>{
                let price = item.price.toString();
                price = price.charAt(price.length-2).replace(price.charAt(price.length-2), `$${price.charAt(price.length-2)}`);
                return(
                    <motion.div
                        whileHover={{scale:1.1}}
                        style={{display: 'flex', margin: 10, padding: 10, flexDirection: 'column', background: "whitesmoke", borderRadius: 4}}
                        initial={"hidden"}
                        animate={"visible"}
                        custom={index}
                        variants={variants}>
                        <motion.div>{item.title}</motion.div>
                        <motion.div>{price}</motion.div>
                        <motion.div>{item.description}</motion.div>
                    </motion.div>
                )
            })}
        </motion.div>
    )
}
export default Products;