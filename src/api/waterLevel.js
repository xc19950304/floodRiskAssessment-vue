import request from '@/utils/request'

export function getWaterLevelList(query) {
  return request({
    url: '/waterLevel/list',
    method: 'get',
    params: query
  })
}

export function getWaterLevel(id) {
  return request({
    url: '/waterLevel/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchWaterLevel(pv) {
  return request({
    url: '/waterLevel/pv',
    method: 'get',
    params: { pv }
  })
}

export function createWaterLevel(data) {
  return request({
    url: '/waterLevel/create',
    method: 'post',
    data
  })
}

export function updateWaterLevel(data) {
  return request({
    url: '/waterLevel/update',
    method: 'post',
    data
  })
}

export function test() {
  return request({
    url: '/home',
    method: 'get',
  })
}
