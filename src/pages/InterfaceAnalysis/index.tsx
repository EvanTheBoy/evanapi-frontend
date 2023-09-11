import {
    PageContainer,
} from '@ant-design/pro-components';
import ReactECharts from 'echarts-for-react';
import React, {useEffect, useState} from 'react';
import {listTopInvokedInterfaceUsingGET} from "@/services/evanapi-backend/analysisController";
import {char} from "stylis";

/**
 * 接口分析
 * @constructor
 */
const InterfaceAnalysis: React.FC = () => {
    const [data, setData] = useState<API.InterfaceInfoVO[]>([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // 从远程获取数据
        try {
            listTopInvokedInterfaceUsingGET().then(res => {
                if (res.data) {
                    setData(res.data);
                }
            })
        } catch (e: any) {

        }
    }, [])

    const chartData = data.map(item => {
        return {
            value: item.totalNum,
            name: item.name
        }
    })

    const option = {
        title: {
            text: '调用次数前3的接口',
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
                data: chartData,
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
