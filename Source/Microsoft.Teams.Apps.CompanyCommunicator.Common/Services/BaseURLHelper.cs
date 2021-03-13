using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;

namespace Microsoft.Teams.Apps.CompanyCommunicator.Common.Services
{
    public class BaseURLHelper
    {
        private HttpContext currentContext;

        public BaseURLHelper(IHttpContextAccessor httpContextAccessor)
        {
            currentContext = httpContextAccessor.HttpContext;
        }
        public string GetBaseUrl()
        {
            var request = currentContext.Request;

            var host = request.Host.ToUriComponent();

            var pathBase = request.PathBase.ToUriComponent();

            return $"{request.Scheme}://{host}{pathBase}";
        }
    }
}
