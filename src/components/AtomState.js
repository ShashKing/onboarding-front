import { atom } from 'recoil';

const p_details = atom({
    key: 'p_details', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
    });

const account_details = atom({
    key: 'account_details',
    default:''
})

const address_details = atom({
    key: 'address_details',
    default:''
})

const company_details = atom({
    key:'company_details',
    default:''
})

export {p_details, account_details, address_details, company_details}