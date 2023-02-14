import React from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import CashOutForm from '../../components/Forms/UserForms/CashOutForm';

const BankTransfer = () => {
    return (
        <div className='bg-bkash height_handle flex items-center'>
            <div className="flex flex-wrap">
                <Breadcrumb title="Bank Transfer" userName="User Name" />
                <div className="w-full mb-12 px-4">
                    <CashOutForm title="Bank Transfer" />
                </div>
            </div>
        </div>
    );
};

export default BankTransfer;