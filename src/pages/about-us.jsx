import React,{Component} from 'react';

// navbar components
import NavbarBack from 'components/navbar-back';

// footer component
import FooterComponent from 'components/footer';

export default class AboutUsPage extends Component {

    render() {
        const imgList = [
            {
                src:'img_01',
                text: '青春活力的办公环境'
            },
            {
                src:'img_02',
                text: '舒适的休息区'
            },
            {
                src:'img_03',
                text: '高大上的办公楼'
            }
        ];
        return (
            <div className='page' data-page='about-us'>
                <NavbarBack title="关于我们" />
                <div className="page-content">
                    <div className="title">
                        公司简介
                    </div>
                    <div className="list-block">
                        <p>
                            51金融圈，中国领先的金融职业平台！我们是一家专注于金融行业的垂直招聘平台。成立两年来人才数量已经突破一百万！  
                        </p>
                        <p>
                            点对点，全天候在线沟通，即时视频面试交流；一键式导入职位信息与专属的人才库管理等便捷高效的使用体验。平台网罗金融各个行业，每周都有高端职位推荐，海量名企工作机会，世界500强企业、行业巨头、创业新秀...等知名企业任你选择；百万级人 才库,为猎头HR们提供大量优秀人才。51金融圈，成就您的精彩人生！
                        </p>
                        <img className="slogen" src="images/about-us/slogen.jpg" alt=""/>
                        <div className="intro">
                            {
                                imgList.map((item,index)=>{
                                    return (
                                        <div key={`img_${index}`}>
                                            <img src={`images/about-us/${item.src}.jpg`} alt=""/>
                                            <p>{item.text}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <FooterComponent location={location} />
                </div>
            </div>
        );
    }
}