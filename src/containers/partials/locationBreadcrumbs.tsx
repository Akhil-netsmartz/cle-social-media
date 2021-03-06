import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { capitalize } from "../../components/utility/allutils";

function Breadcrumbs(props) {
    const location = useLocation()
    const { category, subcat, childcat, greatchildcat } = useParams();
    let stateBread = location.pathname.split('\/');
    const [breadcrumsState, setBreadcrumsState] = useState(stateBread);
    const [keyUl, setKey] = useState('');
    useEffect(() => {
        let urlPath = '';
        if (category && subcat && childcat && greatchildcat) {
            urlPath = category + "/" + subcat + "/" + childcat + '/' + greatchildcat;
        } else if (category && subcat && childcat) {
            urlPath = category + "/" + subcat + "/" + childcat;
        } else if (category && subcat) {
            urlPath = category + "/" + subcat;
        } else {
            urlPath = category;
        }
        //   console.log(urlPath)
        // let test = urlPath.split("/");
        //console.log(test)
        setKey(urlPath)
        let breads = location.pathname.split('\/');
        setBreadcrumsState(breads)
    }, [location]);

    return (
        <nav aria-label="breadcrumb" className="new-breadcrumb">
            {(location.pathname !== "/home") && (
                <ol className="breadcrumb">
                    <li className="breadcrumb-item" key={100}><Link to="/">Home</Link></li>
                    {breadcrumsState.map((local, j) => {
                      //  console.log(local)
                        if (j === breadcrumsState.length - 1) {
                            let data = local.split('-')
                            if (local === 'orders-and-returns' || local === 'wish-list' || local === 'profile' || local === 'support') {
                                return (
                                    <li key={j} className="breadcrumb-item active">My
                                        {
                                            data.map((answer, i) => {
                                                return (<span key={i}> {capitalize(answer)} </span>)
                                            })
                                        }
                                    </li>

                                )
                            }else if (local === 'checkout' ) {
                                return (
                                    <>
                                    <li key={0}  className="breadcrumb-item"><Link to='my-cart'>My Cart </Link></li>
                                    <li key={j} className="breadcrumb-item active"> 
                                        {
                                            data.map((answer, i) => {
                                                return (<span key={i}>{capitalize(answer)} </span>)
                                            })
                                        }
                                    </li>
                                    </>
                                )
                            } else {
                                return (
                                    <li key={j} className="breadcrumb-item active">
                                        {
                                            data.map((answer, i) => {
                                                return (<span key={i}> {capitalize(answer)} </span>)
                                            })
                                        }
                                    </li>

                                )
                            }

                        } else {
                            if (local === "") {
                                return "";
                            } else {
                                //  console.log(local)
                                if (local === 'product-details') {
                                    return (
                                        <li key={j} className="breadcrumb-item"><Link to={local === 'product-details' ? '/products' : "/" + local}>{local === 'product-details' ? 'Products' : local}</Link></li>
                                    )
                                } else if (local === 'order-details') {
                                    return (
                                        <li key={j} className="breadcrumb-item"><Link to={'/customer/orders-and-returns'}>{local === 'order-details' ? 'Orders' : local}</Link></li>
                                    )
                                } else if (local === 'customer') {
                                    return (
                                        <li key={j} className="breadcrumb-item"><Link to={"/customer/dashboard"}>My Account</Link></li>
                                    )
                                }else if (local === 'vendor') {
                                    return (
                                        <li key={j} className="breadcrumb-item"><Link to={"/customer/dashboard"}>My Business Account</Link></li>
                                    )
                                } else if (local === category) {
                                    return (
                                        <li key={j} className="breadcrumb-item"><Link to={"/products/" + category}>{category}</Link></li>
                                    )
                                } else if (local === subcat) {
                                    return (
                                        <li key={j} className="breadcrumb-item"><Link to={"/products/" + category + "/" + subcat}>{subcat}</Link></li>
                                    )
                                } else if (local === childcat) {
                                    return (
                                        <li key={j} className="breadcrumb-item"><Link to={"/products/" + category + "/" + subcat + "/" + childcat}>{childcat}</Link></li>
                                    )
                                } else if (local === greatchildcat) {
                                    return (
                                        <li key={j} className="breadcrumb-item"><Link to={"/products/" + category + "/" + subcat + "/" + childcat + "/" + greatchildcat}>{greatchildcat}</Link></li>
                                    )
                                } else if (local === 'search') {
                                    return (
                                        <li key={j} className="breadcrumb-item"><Link to={"/"}>Search</Link></li>
                                    )
                                } else {
                                    return (
                                        <li key={j} className="breadcrumb-item"><Link to={local === 'product-details' ? '/products' : "/" + local}>{local === 'product-details' ? 'Products' : capitalize(local)}</Link></li>
                                    )
                                }

                            }
                        }
                    })}
                </ol>
            )
            }
        </nav >
    );
}

export default Breadcrumbs;