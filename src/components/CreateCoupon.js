import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { PartnerContext } from '../App';
import '../styles/globals.css'
import {BASE_URL} from '../helper'

const CreateCoupon = () => {

    const { state, dispatch } = useContext(PartnerContext);
    dispatch({ type: "PARTNER", payload: true });
    const navigate = useNavigate();

    const [checked, setChecked] = useState([]);
    const checkList = ["Paddy", "Wheat", "Maize", "Moong", "Urad"];
    const [others, setOthers] = useState("");

    // Add/Remove checked item from list
    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };

    // Generate string of checked items
    const checkedItems = checked.length
        ? checked.reduce((total, item) => {
            return total + ", " + item;
        })
        : "";


    // Return classes based on whether item is checked
    var isChecked = (item) =>
        checked.includes(item) ? "checked-item" : "not-checked-item";


    const handleInput = (e) => {
        setOthers(e.target.value)
    }


    const [farmer, setFarmer] = useState({
        partner: "",
        panchayat: "",
        block: "BIHPUR",
        dist: "BHAGALPUR",
        farmer_name: "",
        farmer_register:"",
        father_husband_name: "",
        mobile: "",
        aadhar: "",
        wife_husband_aadhar: "",
        reven_vill: "",
        own_agri_land: "",
        khata: "",
        khesra: "",
        rakwa: "",
        agri_implem:"",
        crops: "",
        dis_pmp: "",
        no_dis_pmp: "",
        elec_pmp: "",
        no_elec_pmp: "",
        kcc: "",
        benef_pm_kisan: "",
        payment_install: ""
    });

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setFarmer({ ...farmer, [name]: value });
        var element = document.getElementById("part")
        element.setCustomValidity("")
        element = document.getElementById("panch")
        element.setCustomValidity("")
        element = document.getElementById("block")
        element.setCustomValidity("")
        element = document.getElementById("dist")
        element.setCustomValidity("")
        element = document.getElementById("farm")
        element.setCustomValidity("")
        element = document.getElementById("farm_reg")
        element.setCustomValidity("")
        element = document.getElementById("fathus")
        element.setCustomValidity("")
        element = document.getElementById("mob")
        element.setCustomValidity("")
        element = document.getElementById("aadh")
        element.setCustomValidity("")
        element = document.getElementById("wifhusaadh")
        element.setCustomValidity("")
        element = document.getElementById("reven")
        element.setCustomValidity("")
        element = document.getElementById("ownagr")
        element.setCustomValidity("")
        element = document.getElementById("khat")
        element.setCustomValidity("")
        element = document.getElementById("khes")
        element.setCustomValidity("")
        element = document.getElementById("rak")
        element.setCustomValidity("")
        element = document.getElementById("agr_imp")
        element.setCustomValidity("")
        element = document.getElementById("crop")
        element.setCustomValidity("")
        element = document.getElementById("dis")
        element.setCustomValidity("")
        element = document.getElementById("nodispmp")
        element.setCustomValidity("")
        element = document.getElementById("elec")
        element.setCustomValidity("")
        element = document.getElementById("noelecpmp")
        element.setCustomValidity("")
        element = document.getElementById("kcc")
        element.setCustomValidity("")
        element = document.getElementById("benef")
        element.setCustomValidity("")
        element = document.getElementById("payminst")
        element.setCustomValidity("")
    };

    const getJWTToken = () => {
        return localStorage.getItem("jwtoken");
    };

    const jwtToken = getJWTToken()

    const callCreate = async () => {
        try {
            const res = await fetch(`${BASE_URL}/getdata`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                // credentials:"include"
            });

            const data = await res.json();
            setFarmer({ ...farmer, partner: data.name });

            if (res.status !== 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
            navigate("/");
        }
    }

    useEffect(() => {
        callCreate();
    }, []);


    const validate = (values) => {
        const errors = {}
        // console.log("hi")
        if (!values.partner || values.partner === "") errors.partner = "Cannot be blank"
        else errors.partner = ""
        if (!values.panchayat || values.panchayat === "") errors.panchayat = "Cannot be blank"
        else errors.panchayat = ""
        if (!values.block || values.block === "") errors.block = "Cannot be blank"
        else errors.block = ""
        if (!values.dist || values.dist === "") errors.dist = "Cannot be blank"
        else errors.dist = ""
        if (!values.farmer_name || values.farmer_name === "") errors.farmer_name = "Cannot be blank"
        else errors.farmer_name = ""
        if (!values.farmer_register || values.farmer_register === "") errors.farmer_register = "Cannot be blank"
        else errors.farmer_register = ""
        if (!values.father_husband_name || values.father_husband_name === "") errors.father_husband_name = "Cannot be blank"
        else errors.father_husband_name = ""
        if (!values.mobile || values.mobile === "") errors.mobile = "Cannot be blank"
        else errors.mobile = ""
        if (!values.aadhar || values.aadhar === "") errors.aadhar = "Cannot be blank"
        else errors.aadhar = ""
        if (!values.wife_husband_aadhar || values.wife_husband_aadhar === "") errors.wife_husband_aadhar = "Cannot be blank"
        else errors.wife_husband_aadhar = ""
        if (!values.reven_vill || values.reven_vill === "") errors.reven_vill = "Cannot be blank"
        else errors.reven_vill = ""
        if (!values.own_agri_land || values.own_agri_land === "") errors.own_agri_land = "Cannot be blank"
        else errors.own_agri_land = ""
        if (!values.khata || values.khata === "") errors.khata = "Cannot be blank"
        else errors.khata = ""
        if (!values.khesra || values.khesra === "") errors.khesra = "Cannot be blank"
        else errors.khesra = ""
        if (!values.rakwa || values.rakwa === "") errors.rakwa = "Cannot be blank"
        else errors.rakwa = ""
        if (!values.agri_implem || values.agri_implem === "") errors.agri_implem = "Cannot be blank"
        else errors.agri_implem = ""
        if (checked.length === 0) errors.crops = "Cannot be blank"
        else errors.crops = ""
        if (!values.dis_pmp || values.dis_pmp === "") errors.dis_pmp = "Cannot be blank"
        else errors.dis_pmp = ""
        if (!values.no_dis_pmp || values.no_dis_pmp === "") errors.no_dis_pmp = "Cannot be blank"
        else errors.no_dis_pmp = ""
        if (!values.elec_pmp || values.elec_pmp === "") errors.elec_pmp = "Cannot be blank"
        else errors.elec_pmp = ""
        if (!values.no_elec_pmp || values.no_elec_pmp === "") errors.no_elec_pmp = "Cannot be blank"
        else errors.no_elec_pmp = ""
        if (!values.kcc || values.kcc === "") errors.kcc = "Cannot be blank"
        else errors.kcc = ""
        if (!values.benef_pm_kisan || values.benef_pm_kisan === "") errors.benef_pm_kisan = "Cannot be blank"
        else errors.benef_pm_kisan = ""
        if (!values.payment_install || values.payment_install === "") errors.payment_install = "Cannot be blank"
        else errors.payment_install = ""

        return errors;
    }

    const submit = async (e) => {
        e.preventDefault();

        if (others !== "") {
            checked.push(others)
        }

        let valid = validate(farmer)
        // couponErr.coupon_id || couponErr.product_id || couponErr.partner_id || couponErr.coupon_code || couponErr.min_price || couponErr.discount || couponErr.max_times_use || couponErr.validity || couponErr.max_discount
        if (valid.partner !== "") {
            var element = document.getElementById("part")
            // console.log("hi")
            element.setCustomValidity(valid.partner);
            element.reportValidity();
            return
        }
        if (valid.panchayat !== "") {
            var element = document.getElementById("panch")
            // console.log("panch not here")
            element.setCustomValidity(valid.panchayat);
            element.reportValidity();
            return
        }
        if (valid.block !== "") {
            var element = document.getElementById("block")
            // console.log("hi")
            element.setCustomValidity(valid.block);
            element.reportValidity();
            return
        }
        if (valid.dist !== "") {
            var element = document.getElementById("dist")
            // console.log("hi")
            element.setCustomValidity(valid.dist);
            element.reportValidity();
            return
        }
        if (valid.farmer_name !== "") {
            var element = document.getElementById("farm")
            // console.log("hi")
            element.setCustomValidity(valid.farmer_name);
            element.reportValidity();
            return
        }
        if (valid.farmer_register !== "") {
            var element = document.getElementById("farm_reg")
            // console.log("hi")
            element.setCustomValidity(valid.farmer_register);
            element.reportValidity();
            return
        }
        if (valid.father_husband_name !== "") {
            var element = document.getElementById("fathus")
            // console.log("hi")
            element.setCustomValidity(valid.father_husband_name);
            element.reportValidity();
            return
        }
        if (valid.mobile !== "") {
            var element = document.getElementById("mob")
            // console.log("hi")
            element.setCustomValidity(valid.mobile);
            element.reportValidity();
            return
        }

        if (valid.aadhar !== "") {
            var element = document.getElementById("aadh")
            // console.log("hi")
            element.setCustomValidity(valid.aadhar);
            element.reportValidity();
            return
        }
        if (valid.wife_husband_aadhar !== "") {
            var element = document.getElementById("wifhusaadh")
            // console.log("hi")
            element.setCustomValidity(valid.wife_husband_aadhar);
            element.reportValidity();
            return
        }
        if (valid.reven_vill !== "") {
            var element = document.getElementById("reven")
            // console.log("hi")
            element.setCustomValidity(valid.reven_vill);
            element.reportValidity();
            return
        }
        if (valid.own_agri_land !== "") {
            var element = document.getElementById("ownagr")
            // console.log("hi")
            element.setCustomValidity(valid.own_agri_land);
            element.reportValidity();
            return
        }
        if (valid.khata !== "") {
            var element = document.getElementById("khat")
            // console.log("hi")
            element.setCustomValidity(valid.khata);
            element.reportValidity();
            return
        }
        if (valid.khesra !== "") {
            var element = document.getElementById("khes")
            // console.log("hi")
            element.setCustomValidity(valid.khesra);
            element.reportValidity();
            return
        }
        if (valid.rakwa !== "") {
            var element = document.getElementById("rak")
            // console.log("hi")
            element.setCustomValidity(valid.rakwa);
            element.reportValidity();
            return
        }
        if (valid.agri_implem !== "") {
            var element = document.getElementById("agr_imp")
            // console.log("hi")
            element.setCustomValidity(valid.agri_implem);
            element.reportValidity();
            return
        }
        if (valid.crops !== "") {
            var element = document.getElementById("crop")
            // console.log("hi")
            element.setCustomValidity(valid.crops);
            element.reportValidity();
            return
        }
        if (valid.dis_pmp !== "") {
            var element = document.getElementById("dis")
            // console.log("hi")
            element.setCustomValidity(valid.dis_pmp);
            element.reportValidity();
            return
        }
        if (farmer.dis_pmp === 'Yes') {
            if (valid.no_dis_pmp !== "") {
                var element = document.getElementById("nodispmp")
                // console.log("hi")
                element.setCustomValidity(valid.no_dis_pmp);
                element.reportValidity();
                return
            }
        }
        if (valid.elec_pmp !== "") {
            var element = document.getElementById("elec")
            // console.log("hi")
            element.setCustomValidity(valid.elec_pmp);
            element.reportValidity();
            return
        }
        if (farmer.elec_pmp === 'Yes') {
            if (valid.no_elec_pmp !== "") {
                var element = document.getElementById("noelecpmp")
                // console.log("hi")
                element.setCustomValidity(valid.no_elec_pmp);
                element.reportValidity();
                return
            }
        }
        if (valid.kcc !== "") {
            var element = document.getElementById("kcc")
            // console.log("hi")
            element.setCustomValidity(valid.kcc);
            element.reportValidity();
            return
        }
        if (valid.benef_pm_kisan !== "") {
            var element = document.getElementById("benef")
            // console.log("hi")
            element.setCustomValidity(valid.benef_pm_kisan);
            element.reportValidity();
            return
        }
        if (farmer.benef_pm_kisan === 'Yes') {
            if (valid.payment_install !== "") {
                var element = document.getElementById("payminst")
                // console.log("hi")
                element.setCustomValidity(valid.payment_install);
                element.reportValidity();
                return
            }
        }

        const { partner,
            panchayat,
            block,
            dist,
            farmer_name,
            farmer_register,
            father_husband_name,
            mobile,
            aadhar,
            wife_husband_aadhar,
            reven_vill,
            own_agri_land,
            khata,
            khesra,
            rakwa,
            agri_implem,
            crops,
            dis_pmp,
            no_dis_pmp,
            elec_pmp,
            no_elec_pmp,
            kcc,
            benef_pm_kisan,
            payment_install } = farmer;


        // console.log(checked);

        const response = await fetch(`${BASE_URL}/create`, {
            method: 'POST',
            body: JSON.stringify({
                partner,
                panchayat,
                block,
                dist,
                farmer_name,
                farmer_register,
                father_husband_name,
                mobile,
                aadhar,
                wife_husband_aadhar,
                reven_vill,
                own_agri_land,
                khata,
                khesra,
                rakwa,
                agri_implem,
                crops: checked,
                dis_pmp,
                no_dis_pmp,
                elec_pmp,
                no_elec_pmp,
                kcc,
                benef_pm_kisan,
                payment_install
            }),

            headers: {
                "Authorization": `Bearer ${jwtToken}`,
                'Content-Type': 'application/json'
            }
        })

        // console.log(response.status);
        const status = response.status;

        if (status === 201) {
            window.alert("Farmer Details Stored Successfully");
            console.log("creation successful");
            // navigate("/");
            setFarmer({
                ...farmer,
                // partner: "",
                panchayat: "",
                // block: "",
                // dist: "",
                farmer_name: "",
                farmer_register:"",
                father_husband_name: "",
                mobile: "",
                aadhar: "",
                wife_husband_aadhar: "",
                reven_vill: "",
                own_agri_land: "",
                khata: "",
                khesra: "",
                rakwa: "",
                agri_implem:"",
                crops: "",
                dis_pmp: "",
                no_dis_pmp: "",
                elec_pmp: "",
                no_elec_pmp: "",
                kcc: "",
                benef_pm_kisan: "",
                payment_install: ""
            });
            navigate('/home');
        }
        else if (status === 422) {
            window.alert("Farmer is already existing");
            console.log("duplicate farmer");
        }
        else {
            window.alert("Invalid farmer Creation");
            console.log("Invalid farmer create");
        }

    }


    return (

        <div>
            <h1 className="text-center mt-4">Add New Farmer</h1>

            <div className="container create">
                <form method="POST" className="card">
                    <div style={{ padding: "20px 20px 0px 20px" }}>
                        <div class="form-group" style={{ "padding-top": "20px" }}>
                            <label for="exampleInputPassword1">Agriculture Co-ordinator:</label>
                            <input
                                id="part"
                                type="text"
                                class="form-control"
                                name="partner"
                                //id="exampleInputPassword1"
                                value={farmer.partner}
                                onChange={handleInputs}
                                placeholder="Partner Name"
                                disabled={true}
                            />
                            {/* <div className="text-danger">{couponErr.partner_id}</div> */}
                        </div>

                        <div class="form-group">
                            <label for="exampleInputEmail1">Panchayat:</label>
                            <select class="form-select" name="panchayat" id="panch" aria-label="Default select example" value={farmer.panchayat} onChange={(e) => setFarmer({ ...farmer, panchayat: e.target.value })}>
                                <option value="">Open this select menu</option>
                                <option name="panchayat" value="BABHANGAMA">BABHANGAMA</option>
                                <option name="panchayat" value="LATTIPUR NORTH">LATTIPUR NORTH</option>
                                <option name="panchayat" value="LATTIPUR SOUTH">LATTIPUR SOUTH</option>
                                <option name="panchayat" value="BIHPUR EAST">BIHPUR EAST</option>
                                <option name="panchayat" value="BIHPUR JAMALPUR">BIHPUR JAMALPUR</option>
                                <option name="panchayat" value="BIHPUR SOUTH">BIHPUR SOUTH</option>
                                <option name="panchayat" value="BIHPUR MIDDLE">BIHPUR MIDDLE</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="exampleInputPassword1">Block:</label>
                            <input
                                id="block"
                                type="text"
                                name="block"
                                class="form-control"
                                //id="exampleInputPassword1"
                                value={farmer.block}
                                onChange={handleInputs}
                                placeholder="Block"
                                disabled={true}
                            />
                            {/* <div className="text-danger">{couponErr.coupon_code}</div> */}
                        </div>

                        <div class="form-group">
                            <label for="exampleInputPassword1">District:</label>
                            <input
                                id="dist"
                                type="text"
                                name="dist"
                                class="form-control"
                                //id="exampleInputPassword1"
                                value={farmer.dist}
                                onChange={handleInputs}
                                placeholder="District"
                                disabled={true}
                            />
                            {/* <div className="text-danger">{couponErr.min_price}</div> */}
                        </div>

                        
                        <div class="form-group">
                            <label for="exampleInputPassword1">Farmer Registration No. :</label>
                            <input
                                id="farm_reg"
                                type="text"
                                name="farmer_register"
                                class="form-control"
                                //id="exampleInputPassword1"
                                value={farmer.farmer_register}
                                onChange={handleInputs}
                                placeholder="Farmer Registtration No"
                            />
                            {/* <div className="text-danger">{couponErr.max_times_use}</div> */}
                        </div>

                        <div class="form-group">
                            <label for="exampleInputPassword1">Farmer Name:</label>
                            <input
                                id="farm"
                                type="text"
                                name="farmer_name"
                                class="form-control"
                                //id="exampleInputPassword1"
                                value={farmer.farmer_name}
                                onChange={handleInputs}
                                placeholder="Farmer Name"
                            />
                            {/* <div className="text-danger">{couponErr.max_times_use}</div> */}
                        </div>

                        <div class="form-group">
                            <label for="exampleInputPassword1">Father/Husband Name:</label>
                            <input
                                id="fathus"
                                type="text"
                                name="father_husband_name"
                                class="form-control"
                                //id="exampleInputPassword1"
                                value={farmer.father_husband_name}
                                onChange={handleInputs}
                                placeholder="Father or Husband Name"
                            />
                            {/* <div className="text-danger">{couponErr.validity}</div> */}
                        </div>

                        <div class="form-group">
                            <label for="exampleInputPassword1">Mobile No:</label>
                            <input
                                id="mob"
                                type="text"
                                name="mobile"
                                class="form-control"
                                //id="exampleInputPassword1"
                                value={farmer.mobile}
                                onChange={handleInputs}
                                placeholder="Mobile Number"
                            />
                            {/* <div className="text-danger">{couponErr.ediscount}</div> */}
                        </div>

                        <div class="form-group">
                            <label for="exampleInputPassword1">Farmer Aadhar:</label>
                            <input
                                id="aadh"
                                type="text"
                                name="aadhar"
                                class="form-control"
                                //id="exampleInputPassword1"
                                value={farmer.aadhar}
                                onChange={handleInputs}
                                placeholder="Farmer Aadhar No"
                            />
                            {/* <div className="text-danger">{couponErr.max_discount}</div> */}
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Wife/Husband Aadhar:</label>
                            <input
                                id="wifhusaadh"
                                type="text"
                                name="wife_husband_aadhar"
                                class="form-control"
                                //id="exampleInputPassword1"
                                value={farmer.wife_husband_aadhar}
                                onChange={handleInputs}
                                placeholder="Wife or Husband Aadhar No"
                            />
                            {/* <div className="text-danger">{couponErr.max_times_use}</div> */}
                        </div>

                        <div class="form-group">
                            <label for="exampleInputPassword1">Revenue Village:</label>
                            <input
                                id="reven"
                                type="text"
                                name="reven_vill"
                                class="form-control"
                                //id="exampleInputPassword1"
                                value={farmer.reven_vill}
                                onChange={handleInputs}
                                placeholder="Revenue Village"
                            />
                            {/* <div className="text-danger">{couponErr.validity}</div> */}
                        </div>

                        <div class="form-group ">
                            <label for="exampleInputPassword1">Own Agriculture Land:</label>
                            <div className="form-control radio-box">
                                <div className="radio">
                                    <input type="radio" id="ownagr" name="own_agri_land" value="Yes" onChange={(e) => setFarmer({ ...farmer, own_agri_land: e.target.value })} />
                                    <label for="yes">Yes</label>
                                </div>
                                <div className="radio">
                                    <input type="radio" id="ownagr" name="own_agri_land" value="No" onChange={(e) => setFarmer({ ...farmer, own_agri_land: e.target.value })} />
                                    <label for="no">No</label>
                                </div>
                            </div>
                            {/* <div className="text-danger">{couponErr.max_discount}</div> */}
                        </div>

                        <div class="form-group">
                            <label for="exampleInputPassword1">Khata:</label>
                            <input
                                id="khat"
                                type="text"
                                name="khata"
                                class="form-control"
                                //id="exampleInputPassword1"
                                value={farmer.khata}
                                onChange={handleInputs}
                                placeholder="Khata"
                            />
                            {/* <div className="text-danger">{couponErr.validity}</div> */}
                        </div>

                        <div class="form-group">
                            <label for="exampleInputPassword1">Khesra:</label>
                            <input
                                id="khes"
                                type="text"
                                name="khesra"
                                class="form-control"
                                //id="exampleInputPassword1"
                                value={farmer.khesra}
                                onChange={handleInputs}
                                placeholder="Khesra"
                            />
                            {/* <div className="text-danger">{couponErr.ediscount}</div> */}
                        </div>

                        <div class="form-group">
                            <label for="exampleInputPassword1">Rakwa:</label>
                            <input
                                id="rak"
                                type="text"
                                name="rakwa"
                                class="form-control"
                                //id="exampleInputPassword1"
                                value={farmer.rakwa}
                                onChange={handleInputs}
                                placeholder="Rakwa"
                            />
                            {/* <div className="text-danger">{couponErr.max_discount}</div> */}
                        </div>

                        <div class="form-group">
                            <label for="exampleInputPassword1">Crops:</label>
                            <div className="form-control">

                                <div className="list-container">
                                    {checkList.map((item, index) => (
                                        <div key={index}>
                                            <input id="crop" value={item} type="checkbox" onChange={handleCheck} />
                                            <span className={isChecked(item)}>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="check-show">
                                    <input
                                        id="crop"
                                        type="text"
                                        // name="crops"
                                        class="form-control"
                                        //id="exampleInputPassword1"
                                        value={others}
                                        onChange={handleInput}
                                        placeholder="any other crop"
                                    />
                                </div>

                                <div className="check-show">
                                    <strong>Crops Selected:</strong>  {checkedItems}
                                </div>

                            </div>
                            {/* <div className="text-danger">{couponErr.max_times_use}</div> */}
                        </div>

                        <div class="form-group">
                            <label for="exampleInputPassword1">Agricultural Implements:</label>
                            <input
                                id="agr_imp"
                                type="text"
                                name="agri_implem"
                                class="form-control"
                                //id="exampleInputPassword1"
                                value={farmer.agri_implem}
                                onChange={handleInputs}
                                placeholder="Agricultural Implements"
                            />
                            {/* <div className="text-danger">{couponErr.max_discount}</div> */}
                        </div>

                        <div class="form-group">
                            <label for="exampleInputPassword1">Diesel Pumpset:</label>
                            <div className="form-control radio-box">
                                <div className="radio">
                                    <input type="radio" id="dis" name="dis_pmp" value="Yes" onChange={(e) => setFarmer({ ...farmer, dis_pmp: e.target.value })} />
                                    <label for="yes">Yes</label>
                                </div>
                                <div className="radio">
                                    <input type="radio" id="dis" name="dis_pmp" value="No" onChange={(e) => setFarmer({ ...farmer, dis_pmp: e.target.value })} />
                                    <label for="no">No</label>
                                </div>
                            </div>
                            {/* <div className="text-danger">{couponErr.validity}</div> */}
                        </div>

                        {(farmer.dis_pmp === 'Yes') ?
                            <div class="form-group">
                                <label for="exampleInputPassword1">No of Diesel Pumpset:</label>
                                <input
                                    id="nodispmp"
                                    type="text"
                                    name="no_dis_pmp"
                                    class="form-control"
                                    //id="exampleInputPassword1"
                                    value={farmer.no_dis_pmp}
                                    onChange={handleInputs}
                                    placeholder="No of Diesel Pumps"
                                />
                            </div> :
                            <div class="form-group">
                            </div>
                        }

                        <div class="form-group">
                            <label for="exampleInputPassword1">Electric Pumpset:</label>
                            <div className="form-control radio-box">
                                <div className="radio">
                                    <input type="radio" id="elec" name="elec_pmp" value="Yes" onChange={(e) => setFarmer({ ...farmer, elec_pmp: e.target.value })} />
                                    <label for="yes">Yes</label>
                                </div>
                                <div className="radio">
                                    <input type="radio" id="elec" name="elec_pmp" value="No" onChange={(e) => setFarmer({ ...farmer, elec_pmp: e.target.value })} />
                                    <label for="no">No</label>
                                </div>
                            </div>
                            {/* <div className="text-danger">{couponErr.validity}</div> */}
                        </div>

                        {(farmer.elec_pmp === 'Yes') ?
                            <div class="form-group">
                                <label for="exampleInputPassword1">No of Electric Pumpset:</label>
                                <input
                                    id="noelecpmp"
                                    type="text"
                                    name="no_elec_pmp"
                                    class="form-control"
                                    //id="exampleInputPassword1"
                                    value={farmer.no_elec_pmp}
                                    onChange={handleInputs}
                                    placeholder="No of Electric Pumps"
                                />
                            </div> :
                            <div class="form-group">
                            </div>
                        }

                        <div class="form-group">
                            <label for="exampleInputPassword1">Kisan Credit Card:</label>
                            <div className="form-control radio-box">
                                <div className="radio">
                                    <input type="radio" id="kcc" name="kcc" value="Yes" onChange={(e) => setFarmer({ ...farmer, kcc: e.target.value })} />
                                    <label for="yes">Yes</label>
                                </div>
                                <div className="radio">
                                    <input type="radio" id="kcc" name="kcc" value="No" onChange={(e) => setFarmer({ ...farmer, kcc: e.target.value })} />
                                    <label for="no">No</label>
                                </div>
                            </div>
                            {/* <div className="text-danger">{couponErr.ediscount}</div> */}
                        </div>

                        <div class="form-group">
                            <label for="exampleInputPassword1">Beneficiery of PM Kisan:</label>
                            <div className="form-control radio-box">
                                <div className="radio">
                                    <input type="radio" id="benef" name="benef_pm_kisan" value="Yes" onChange={(e) => setFarmer({ ...farmer, benef_pm_kisan: e.target.value })} />
                                    <label for="yes">Yes</label>
                                </div>
                                <div className="radio">
                                    <input type="radio" id="benef" name="benef_pm_kisan" value="No" onChange={(e) => setFarmer({ ...farmer, benef_pm_kisan: e.target.value })} />
                                    <label for="no">No</label>
                                </div>
                            </div>
                            {/* <div className="text-danger">{couponErr.max_discount}</div> */}
                        </div>

                        {(farmer.benef_pm_kisan === 'Yes') ?
                            <div class="form-group">
                                <label for="exampleInputPassword1">Payment Installment:</label>
                                <input
                                    id="payminst"
                                    type="number"
                                    name="payment_install"
                                    class="form-control"
                                    //id="exampleInputPassword1"
                                    value={farmer.payment_install}
                                    onChange={handleInputs}
                                    placeholder="Payment Installment"
                                />
                            </div> :
                            <div class="form-group">
                            </div>
                        }

                        <div className="text-center">
                            <button
                                type="submit"
                                onClick={submit}
                                class="btn btn-primary  m-3">
                                Add Farmer
                            </button>
                        </div>
                        <br />
                    </div>
                </form>
            </div>
            <style jsx>{`
                body {
                    background-color: lightblue;
                }
                h1{
                    padding: 20px
                }
                .container{
                    padding: 10px
                    display: flex;
                    flex-direction: column;
                    align-items: stretch;            
                }
                .card {
                    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                    transition: 0.3s;
                    border-radius: 20px
                }
                
                .card:hover {
                    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
                }

                .form-group {
                    display: flex;
                    flex-direction: row
                    flex-wrap: wrap
                    justify-content: space-evenly
                    margin: 10px
                    padding-right: 10px
                }
                label {
                    font-size: 18px;
                    // display: inline-block;
                    width: 200px;
                    text-align: left;
                    margin: 10px
                }
            `}</style>
        </div>
    );
}

export default CreateCoupon