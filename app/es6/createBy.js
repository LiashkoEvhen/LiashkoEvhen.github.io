let createBy = ()=>{
    let linkWebSite = 'Created by: http://bit-laboratory.com';
    let stylesLink = [
        'background: #333;',
        'color: white;',
        'padding: 3px 5px;',
        'font-size: 18px;'
    ].join('');

    console.log ( '%c%s', stylesLink , linkWebSite);
};

export default createBy;