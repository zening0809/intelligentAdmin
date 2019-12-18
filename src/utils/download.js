import qs from 'qs'
import Cookies from 'js-cookie'
import Vue from 'vue'
/**
 * @interface Download 下载接口
 * @property {string} url 接口地址
 * @property {object} data 请求参数 
 */
/**
 * @param {Download}
 */
export const download = function ({ url, data }) {
    let jwt = Cookies.get('Authorization');
    let tenantId = Cookies.get('tenantId');
    let stmsId = Cookies.get('stmsId');
    // if (!jwt || !tenantId || !stmsId) {
    //     return Vue.prototype.$alert('请重新登录', '登录失效', {
    //         confirmButtonText: '确定',
    //     });
    // }
    // Object.assign(data, {
    //     jwt,
    //     tenantId,
    //     stmsId
    // })
    const params = qs.stringify(data)
    const body = document.body;
    const a = document.createElement('a')
    a.href = `${url}?${params}`
    a.target = '_blank'
    a.download = `${'测试'}.xsls`
    body.appendChild(a);
    a.click()
    let timer = setTimeout(() => {
        body.removeChild(a);
        clearTimeout(timer);
        timer = null;
    }, 100);
}
/**
 * @interface options 下载接口
 * @property {string} path [预览路径]  
 */
/**
 * @function preview
 * @description 预览
 * @param {options}
 */
export const preview = function ({ path }) {
    let jwt = Cookies.get('Authorization');
    let tenantId = Cookies.get('tenantId');
    let stmsId = Cookies.get('stmsId');
    if (!jwt || !tenantId || !stmsId) {
        return Vue.prototype.$alert('请重新登录', '登录失效', {
            confirmButtonText: '确定',
        });
    }
    const data = {}
    Object.assign(data, {
        jwt,
        tenantId,
        stmsId,
        pdfPath: path
    })
    if (path) {
        window.open(`/stms/common/pdf/view?${qs.stringify(data)}`);
    } else {
        console.warn('预览 路径不存在')
    }
}
