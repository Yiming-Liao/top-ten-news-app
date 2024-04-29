import React from 'react'

const Badge = ({ country, category }) => {

    const objCategory =
    {
        general: '一般',
        business: '商業',
        technology: '科技',
        entertainment: '娛樂',
        sports: '體育',
        science: '科學',
        health: '健康'
    };
    const objCountry =
    {
        tw: '台灣',
        us: '美國',
        jp: '日本',
        gb: '英國',
        fr: '法國',
        cn: '中國',
        gr: '希臘',
        de: '德國',
        it: '義大利',
    };

    const categoryName = objCategory[category] ? objCategory[category] : null;

    const countryName = objCountry[country] ? objCountry[country] : null;

    return (
        <>
            <div className='w-max mx-auto flex gap-6'>
                <div className="badge badge-primary badge-outline shadow">{countryName}</div>
                <div className="badge badge-primary badge-outline shadow">{categoryName}</div>
            </div>
        </>
    )
}

export default Badge
