using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace PredictionApp
{
    public class CountryPrediction
    {
        public string country_id { get; set; }
        [JsonProperty("probability")]
        public float probability { get; set; }
    }

    public class NationalizeResponse
    {
        public string name { get; set; }
        public List<CountryPrediction> Country = new List<CountryPrediction>();
    }

    public class GenderPrediction
    {
        public string name { get; set; }
        public string gender { get; set; }
        [JsonProperty("probability")]
        public float probability { get; set; }
        public int count { get; set; }
    }

    public class AgePrediciton
    {
        public string name { get; set; }
        public int Age { get; set; }
        [JsonProperty("probability")]
        public float probability { get; set; }
        public int count { get; set; }
    }
}
