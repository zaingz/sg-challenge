export const fetchPermissions = () => {
  return {
    type: 'FETCH_PERMISSIONSONS',
    payload: ['CREATE', 'READ', 'UPDATE', 'DELETE']

  }
}
