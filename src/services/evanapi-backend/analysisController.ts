// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** listTopInvokedInterface GET /api/analysis/top/invoked/interface */
export async function listTopInvokedInterfaceUsingGET(options?: { [key: string]: any }) {
  return request<API.BaseResponseListInterfaceInfoVO>('/api/analysis/top/invoked/interface', {
    method: 'GET',
    ...(options || {}),
  });
}
