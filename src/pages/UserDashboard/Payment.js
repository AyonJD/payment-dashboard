import React from 'react';
import PaymentHistoryTable from '../../components/Tables/UserTable/PaymentHistoryTable';

const Payment = () => {
    return (
        <div className='bg-bkash  w-full'>
            <div className="flex pt-5 justify-center flex-wrap height_handle w-full">
                <div className="w-full px-4">
                    <PaymentHistoryTable color="light" />
                </div>
            </div>
        </div>
    );
};

export default Payment;