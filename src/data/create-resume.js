const getDate = () => {
    // year
    let yearArr = [],monthArr = [],dayArr=[];
    for(let i = 1950;i<=2020;i++) {
        yearArr.push(i);
    }
    for(let i = 1;i<=12;i++){
        monthArr.push(i);
    }
    for(let i = 1;i<=31;i++) {
        dayArr.push(i);
    }
    return [yearArr,monthArr,dayArr];
};

module.exports = [
    {
        name: '真实姓名',
        key: 'username',
        inputType: 'text'
    },
    {
        name: '性别',
        key: 'sex',
        readonly: true,
        inputType: 'text',
        data: ['男','女']
    },
    {
        name: '出生日期',
        key: 'borndate',
        readonly: true,
        inputType: 'text',
        data: getDate()
    },
    {
        name: '手机号码',
        key: 'telephone',
        inputType: 'number'
    },
    {
        name: '邮箱',
        key: 'email',
        inputType: 'email'
    },
    {
        name: '居住城市',
        key: 'livecityid',
        readonly: true,
        inputType: 'text'
    },
    {
        name: '婚姻状况',
        key: 'marital',
        readonly: true,
        inputType: 'text',
        data: ["未婚","已婚","保密"]
    },
    {
        name: '工作年限',
        key: 'workyears',
        readonly: true,
        inputType: 'text',
        data: ["不限","在读学生","应届毕业生","一年以上","二年以上","三年以上","五年以上","八年以上","十年以上"]
    },
    {
        name: '当前状态',
        key: 'jobstatus',
        readonly: true,
        inputType: 'text',
        data: ["目前正在找工作","半年内无换工作计划","一年内无换工作计划","观望有好的机会再考虑","我暂时不想找工作"]
    }
]