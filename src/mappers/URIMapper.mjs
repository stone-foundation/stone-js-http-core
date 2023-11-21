export class URIMapper {

  async map (request, options = {}) {
    const url = new URL(request.url, `http://${options.url}`)
    
    return {
      url,
      method: 'GET',
      queryString: url.search,
      protocol: url.protocol.replace(':', ''),
    }
  }
}
