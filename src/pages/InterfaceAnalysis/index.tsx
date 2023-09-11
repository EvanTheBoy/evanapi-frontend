import {
    PageContainer,
} from '@ant-design/pro-components';
import ReactECharts from 'echarts-for-react';
import React, {useEffect, useState} from 'react';

/**
 * 接口分析
 * @constructor
 */
const InterfaceAnalysis: React.FC = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // 从远程获取数据

    }, [])

    const option = {
        title: {
            text: 'Referer of a Website',
            subtext: 'Fake Data',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: [
                    {value: 1048, name: 'Search Engine'},
                    {value: 735, name: 'Direct'},
                    {value: 580, name: 'Email'},
                    {value: 484, name: 'Union Ads'},
                    {value: 300, name: 'Video Ads'}
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    return (
        <PageContainer>
            {/*render echarts option.*/}
            <ReactECharts loadingOption={{
                showLoading: loading
            }} option={option}/>
        </PageContainer>
    );
};

export default InterfaceAnalysis;
