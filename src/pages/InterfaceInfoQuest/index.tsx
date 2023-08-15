import {PageContainer} from '@ant-design/pro-components';
import {Card, Descriptions, message} from 'antd';
import React, {useEffect, useState} from 'react';
import {
    getInterfaceInfoVOByIdUsingGET,
} from "@/services/evanapi-backend/interfaceInfoController";
import {useParams} from "@@/exports";


const Index: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<API.InterfaceInfoVO>();
  const params = useParams();
  const loadData = async () => {
    if (!params.id) {
      message.error('参数不存在');
      return
    }
    setLoading(true)
    try {
      const res = await getInterfaceInfoVOByIdUsingGET({
          id: Number(params.id)
      });
      setData(res.data);
    } catch (error: any) {
      message.error('创建失败:' + error.message);
    }
    setLoading(false)
  }
  useEffect(() => {
    loadData()
  }, [])
  return (
    <PageContainer title={"查看接口文档"}>
      <Card>
        {
          data ? (
            <Descriptions title={data.name} column={1}>
                <Descriptions.Item label="描述">{data.description}</Descriptions.Item>
                <Descriptions.Item label="接口状态">{data.status ? '正常' : '关闭'}</Descriptions.Item>
                <Descriptions.Item label="请求地址">{data.url}</Descriptions.Item>
                <Descriptions.Item label="请求方法">{data.method}</Descriptions.Item>
                <Descriptions.Item label="请求头">{data.requestHeader}</Descriptions.Item>
                <Descriptions.Item label="响应头">{data.responseHeader}</Descriptions.Item>
                <Descriptions.Item label="创建时间">{data.createTime}</Descriptions.Item>
                <Descriptions.Item label="更新时间">{data.updateTime}</Descriptions.Item>
            </Descriptions>
          ) : (
            <>接口不存在</>
          )
        }
      </Card>
    </PageContainer>
  );
};

export default Index;