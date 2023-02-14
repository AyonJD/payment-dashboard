import React from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import PaymentHistoryTable from '../../components/Tables/UserTable/PaymentHistoryTable';

const Payment = () => {
    return (
        <div className='bg-bkash w-full pt-5'>
            <Breadcrumb title="Payment History" userName="User Name" />
            <div className="flex justify-center flex-wrap height_handle w-full">
                <div className="w-full px-4">
                    <PaymentHistoryTable color="light" />
                </div>
            </div>
        </div>
    );
};

export default Payment;