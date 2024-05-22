using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Printing;
using System.Runtime.InteropServices.JavaScript;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace PredictionApp
{
    public class NationalizeApiClient
    {
        private static readonly HttpClient client = new HttpClient();

        public async Task<CountryPrediction> GetCountryPredictionAsync(string name)
        {
            string url = $"https://api.nationalize.io?name={name}";

            using (HttpClient client = new HttpClient())
            {
                HttpResponseMessage response = await client.GetAsync(url);
                response.EnsureSuccessStatusCode();

                string responseBody = await response.Content.ReadAsStringAsync();
                NationalizeResponse apiRespone = JsonConvert.DeserializeObject<NationalizeResponse>(responseBody);

                if (apiRespone != null && apiRespone.Country.Any())
                {
                    CountryPrediction countryWithHighestProbability = apiRespone.Country.OrderByDescending(x => x.probability).FirstOrDefault();
                    return countryWithHighestProbability;
                }
                else
                {
                    return null;
                }
            }
        }
    }

    public class GenderizeApiClient
    {
        private static readonly HttpClient client = new HttpClient();

        public async Task<GenderPrediction> GetGenderPredictionAsync(string name, string country_id)
        {
            string url = $"https://api.genderize.io?name={name}&country_id={country_id}";
            HttpResponseMessage response = await client.GetAsync(url);

            if (!response.IsSuccessStatusCode)
            {
                throw new HttpRequestException($"Error fetching data from API: {response.ReasonPhrase}");
            }

            string jsonResponse = await response.Content.ReadAsStringAsync();
            GenderPrediction genderPrediction = JsonConvert.DeserializeObject<GenderPrediction>(jsonResponse);

            return genderPrediction;
        }
    }

    public class AgifyApiClient
    {
        private static readonly HttpClient client = new HttpClient();

        public async Task<AgePrediciton> GetAgePredicitonAsync(string name, string country_id)
        {
            string url = $"https://api.agify.io?name={name}&country_id={country_id}";
            HttpResponseMessage response = await client.GetAsync(url);

            if (!response.IsSuccessStatusCode)
            {
                throw new HttpRequestException($"Error fetching data from API: {response.ReasonPhrase}");
            }

            string jsonResponse = await response.Content.ReadAsStringAsync();
            AgePrediciton agePrediciton = JsonConvert.DeserializeObject<AgePrediciton>(jsonResponse);

            return agePrediciton;
        }
    }
}
