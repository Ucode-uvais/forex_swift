//currency code array
const currencyCodes = [
  "aed",
  "afn",
  "all",
  "amd",
  "ang",
  "aoa",
  "ars",
  "aud",
  "awg",
  "azn",
  "bam",
  "bbd",
  "bdt",
  "bgn",
  "bhd",
  "bif",
  "bmd",
  "bnd",
  "bob",
  "brl",
  "bsd",
  "btn",
  "bwp",
  "byn",
  "bzd",
  "cad",
  "cdf",
  "chf",
  "clp",
  "cny",
  "cop",
  "crc",
  "cup",
  "cve",
  "czk",
  "djf",
  "dkk",
  "dop",
  "dzd",
  "egp",
  "ern",
  "etb",
  "eur",
  "fjd",
  "fkp",
  "fok",
  "gbp",
  "gel",
  "ggp",
  "ghs",
  "gip",
  "gmd",
  "gnf",
  "gtq",
  "gyd",
  "hkd",
  "hnl",
  "hrk",
  "htg",
  "huf",
  "idr",
  "ils",
  "imp",
  "inr",
  "iqd",
  "irr",
  "isk",
  "jep",
  "jmd",
  "jod",
  "jpy",
  "kes",
  "kgs",
  "khr",
  "kid",
  "kmf",
  "krw",
  "kwd",
  "kyd",
  "kzt",
  "lak",
  "lbp",
  "lkr",
  "lrd",
  "lsl",
  "lyd",
  "mad",
  "mdl",
  "mga",
  "mkd",
  "mmk",
  "mnt",
  "mop",
  "mru",
  "mur",
  "mvr",
  "mwk",
  "mxn",
  "myr",
  "mzn",
  "nad",
  "ngn",
  "nio",
  "nok",
  "npr",
  "nzd",
  "omr",
  "pab",
  "pen",
  "pgk",
  "php",
  "pkr",
  "pln",
  "pyg",
  "qar",
  "ron",
  "rsd",
  "rub",
  "rwf",
  "sar",
  "sbd",
  "scr",
  "sdg",
  "sek",
  "sgd",
  "shp",
  "sle",
  "sll",
  "sos",
  "srd",
  "ssp",
  "stn",
  "syp",
  "szl",
  "thb",
  "tjs",
  "tmt",
  "tnd",
  "top",
  "try",
  "ttd",
  "tvd",
  "twd",
  "tzs",
  "uah",
  "ugx",
  "usd",
  "uyu",
  "uzs",
  "ves",
  "vnd",
  "vuv",
  "wst",
  "xaf",
  "xcd",
  "xof",
  "xpf",
  "yer",
  "zar",
  "zmw",
  "zwl",
];

const SelectCurrency = ({ selectedCurrency, handleCurrency }) => {
  const countryCode = selectedCurrency.substring(0, 2);

  return (
    <div className="flex items-center p-2 min-h-[45px] rounded-lg bg-opacity-10 bg-white border border-opacity-50 border-white w-full">
      <img
        src={`https://flagcdn.com/h40/${countryCode}.png`}
        alt="Flag"
        className="w-8 h-5"
      />
      <select
        className="outline-none bg-transparent text-white text-base md:text-lg font-medium w-full pr-8 cursor-pointer"
        value={selectedCurrency}
        onChange={handleCurrency}
      >
        {currencyCodes.map((currency) => (
          <option
            key={currency}
            value={currency}
            className="text-black bg-white hover:bg-gray-200 font-medium px-4 py-2 transition duration-150 ease-in-out"
          >
            {currency.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCurrency;
