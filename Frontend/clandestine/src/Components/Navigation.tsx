import * as React from 'react';
import {motion} from 'framer-motion';
import {Link as RLink} from 'react-router-dom';
import * as IO from 'react-icons/io5';
const LRef = React.forwardRef((props:any, ref)=>{
    return <RLink ref={ref} to={props.to} {...props}/>
}), Link = motion(LRef);

interface NavProps{
    drawerAnchor:string
    drawerItems:{text:string, route:string, icon?:any}[]
    menuItems:{text:string, route:string, icon?:any}[]
    style?:object
    brand?:any
}
interface NavState{
    drawerOpen:boolean
}

let drawerVars = (props:any) => {
    return {
        closed:props.drawerAnchor==="top"?{
            height:0,
            transition:{
                type:"spring",bounce:0.2, duration:0.4
            }
        }:{
            width: 250,
            x:250,
            transition:{
                type:'spring', bounce:0,
            }
        },
        open:props.drawerAnchor==="top"?{
            height: props.drawerItems.length*60,

            transition:{
                type:"spring",bounce:0.2, duration:0.4
            }
        }:{
            x:0,
            width: 250,
            transition:{
                type:'spring', bounce:0,
            }
        },
    }
}
class Navigation extends React.Component<NavProps, NavState>{
    constructor(props:NavProps) {
        super(props);
        this.state={
            drawerOpen:false,
        }
    }

    shouldComponentUpdate(nextProps: Readonly<NavProps>, nextState: Readonly<NavState>): boolean {
        return this.props!==nextProps || this.state!==nextState;
    }
    componentDidUpdate(prevProps?: Readonly<any>, prevState?: Readonly<any>, snapshot?: any) {
        console.log(this.state);

    }
    TopDrawer=()=>{

        return (
            <motion.div
                animate={this.state.drawerOpen?"open":"closed"}
                variants={{
                    open: {},
                    closed: {}
                }}>

            </motion.div>
        )
    }
    render(){
        return(
            <motion.div
                style={{width: "100vw", height: 60, position: 'fixed', background: 'lightgray', zIndex: 1000}}>

            </motion.div>
        )
    }
}

export default Navigation;

// Drawer = () => {
//     return (
//         <motion.div
//             style={this.props.drawerAnchor==="top"
//                 ?{
//                     overflow: "hidden",
//                     background: "rgba(10, 10, 10, 0.1)",
//                     display: 'flex',
//                     flexDirection: "column",
//                     justifyContent: 'center',
//                     width: "100vw"}
//                 :{
//                     position: "fixed",
//                     right: this.props.drawerAnchor==="left"?"":0,
//                     background: "rgba(10, 10, 10, 0.1)",
//                     overflow: "hidden",
//                     display: 'flex',
//                     flexDirection: "column",
//                     height: "100vh"}}
//             initial={"closed"}
//             animate={this.state.drawerOpen?"open":"closed"}
//             variants={drawerVars(this.props)}>
//             <motion.ul
//                 style={{
//                 overflow:'hidden',
//                 display: 'flex', flexDirection: 'column',
//                 alignItems:"center",
//                 justifyContent: 'center',
//                 margin:0,
//                 padding:0,
//                 float: "none",
//                 listStyleType:'none',
//                 height: "100%",
//                 position: "relative",
//                     // this.props.drawerItems.length*60
//                 }}
//                 animate={this.state.drawerOpen?"open":"closed"}
//                 initial={"closed"}
//                 variants={drawerVars(this.props)}
//             >
//                 {this.props.drawerItems.map((item:any, index:number)=>{
//                     return(
//                         <Link
//                             whileHover={{}}
//                             key={item.text+index}
//                             style={{
//                                 textDecoration: 'none', color: "black",
//                                 background: "hsla(0, 20%, 100%, 0.2)",
//                                 overflow:'hidden',
//                                 height: 60,
//                                 display: 'flex', alignItems:'center',justifyContent: 'center',
//                                 alignSelf: "flex-start",
//                                 width: this.props.drawerAnchor === "top" ? "100vw" : 250,
//                             }}
//                             to={item.route}>
//                             <motion.h4
//                                 whileHover={{scale:1.1}}
//                                 style={{width: 250, height: 60, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
//                             {item.text}
//                             </motion.h4>
//                         </Link>
//                     )
//                 })}
//             </motion.ul>
//         </motion.div>
//     )
// }
// render(){
//     let variants={
//         closed:{},
//         open:{}
//     }
//     return(
//         <>
//             <motion.div
//                 animate={{}}
//                 style={{
//                     flexDirection: this.props.drawerAnchor!=="top" && this.props.drawerAnchor === "right"?'row':'row-reverse',
//                     position: "fixed", top: 0,
//                     float:this.props.drawerAnchor === "left"?"right":"left",
//                     height: 60, width: "100vw",display: 'flex', alignItems: 'center', ...this.props.style}}>
//                   <button
//                     onClick={()=>this.setState({...this.state,drawerOpen:!this.state.drawerOpen})}>
//                       <IO.IoMenuOutline/>
//                   </button>
//             </motion.div>
//             <this.Drawer/>
//         </>
//     )
// }