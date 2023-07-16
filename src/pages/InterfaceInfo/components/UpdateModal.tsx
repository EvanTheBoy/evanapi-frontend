import {
  ProColumns,
  ProTable,
} from '@ant-design/pro-components';
import { Modal } from 'antd';
import React, {useEffect, useRef} from 'react';
import {ProFormInstance} from "@ant-design/pro-form/lib";

export type FormValueType = {
  target?: string;
  template?: string;
  type?: string;
  time?: string;
  frequency?: string;
} & Partial<API.RuleListItem>;

export type Props = {
  values: API.InterfaceInfoVO;
  columns: ProColumns<API.InterfaceInfoVO>[];
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: API.InterfaceInfoVO) => Promise<void>;
  visible: boolean;
};

const UpdateModal: React.FC<Props> = (props) => {
  const {values, visible, columns, onCancel, onSubmit} = props;
  const formRef = useRef<ProFormInstance>();

  // 监听某个对象的变化, 若发生改变就会触发里面的函数
  useEffect(() => {
    if (formRef) {
      formRef.current?.setFieldsValue(values)
    }
  }, [values])

  return (
    <Modal visible={visible} footer={null} onCancel={() => onCancel?.()}>
      <ProTable
        type="form"
        columns={columns}
        // 保留默认值
        formRef={formRef}
        onSubmit={async (value) => {
          onSubmit?.(value);
        }}
      />
    </Modal>
  );
};

export default UpdateModal;
