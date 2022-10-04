(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{117:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),o=(a(0),a(126)),i={id:"on-premise",title:"On-Premise",slug:"/on-premise"},l={unversionedId:"on-premise",id:"on-premise",isDocsHomePage:!1,title:"On-Premise",description:"Summary",source:"@site/docs/OnPremise.md",slug:"/on-premise",permalink:"/docs/on-premise",version:"current",sidebar:"tryNowSidebar",previous:{title:"Embodied Emissions",permalink:"/docs/embodied-emissions"},next:{title:"Introduction",permalink:"/docs/introduction"}},s=[{value:"Summary",id:"summary",children:[{value:"Custom Data Model",id:"custom-data-model",children:[]},{value:"Methodology",id:"methodology",children:[]},{value:"Configuration Options",id:"configuration-options",children:[]},{value:"Accessing the Data",id:"accessing-the-data",children:[]}]}],c={toc:s};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"summary"},"Summary"),Object(o.b)("h3",{id:"custom-data-model"},"Custom Data Model"),Object(o.b)("p",null,"As more organizations consider moving to the cloud, energy consumption and CO2e emissions associated with the migration from on-premise or co-located data centers should be taken into consideration. Oftentimes, unless the organization provides a sophisticated server measuring software, it can be difficult to measure the energy consumption over a given time period. With much analysis and collaborative efforts with CCF open source contributors, we have created a methodology to measure both energy consumption and CO2e emissions associated with on-premise physical server usage."),Object(o.b)("p",null,"As on-premise consumption tends to vary significantly across organizations, we have decided to implement a generic data model to be used as an input to CCF. ",Object(o.b)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/packages/cli/src/__tests__/EstimateOnPremiseData/on_premise_data_input.test.csv"},"Here")," is a sample CSV file with the data model necessary to be consumed by CCF. This is currently the minimum amount of data needed to make our calculations."),Object(o.b)("p",null,"CSV Data Model:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Name"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"cpuDescription"),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null},"Central processing unit description")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"memory"),Object(o.b)("td",{parentName:"tr",align:null},"number"),Object(o.b)("td",{parentName:"tr",align:null},"Number of gigabytes of memory usage")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"machineType"),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null},"Machine type (Ie. server, laptop, desktop)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"startTime"),Object(o.b)("td",{parentName:"tr",align:null},"Date"),Object(o.b)("td",{parentName:"tr",align:null},"Timestamp recording the start day/time of usage")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"endTime"),Object(o.b)("td",{parentName:"tr",align:null},"Date"),Object(o.b)("td",{parentName:"tr",align:null},"Timestamp recording end day/time of usage")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"country"),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null},"Country where server was located")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"region"),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null},"Region or state within country server was located")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"machineName?"),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null},"Physical host name")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"cost?"),Object(o.b)("td",{parentName:"tr",align:null},"number"),Object(o.b)("td",{parentName:"tr",align:null},"The amount of cost associated with each row")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"cpuUtilization?"),Object(o.b)("td",{parentName:"tr",align:null},"number"),Object(o.b)("td",{parentName:"tr",align:null},"Specific server utilization percentage (Ie. 50% = 50)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"powerUsageEffectiveness?"),Object(o.b)("td",{parentName:"tr",align:null},"number"),Object(o.b)("td",{parentName:"tr",align:null},"Power usage effectiveness for data center")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"dailyUptime"),Object(o.b)("td",{parentName:"tr",align:null},"number"),Object(o.b)("td",{parentName:"tr",align:null},"Active usage hours in the last day")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"weeklyUptime"),Object(o.b)("td",{parentName:"tr",align:null},"number"),Object(o.b)("td",{parentName:"tr",align:null},"Active usage hours in the last week")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"monthlyUptime"),Object(o.b)("td",{parentName:"tr",align:null},"number"),Object(o.b)("td",{parentName:"tr",align:null},"Active usage hours in the last month")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"annualUptime"),Object(o.b)("td",{parentName:"tr",align:null},"number"),Object(o.b)("td",{parentName:"tr",align:null},"Active usage hours in the last year")))),Object(o.b)("p",null,"You will see via the ",Object(o.b)("inlineCode",{parentName:"p"},"machineType")," column that our application supports both on-premise servers from data centers, as well as laptop and desktop devices. We have found that when considering a cloud migration, some organizations may see a change in energy/carbon emissions if they begin running laptop or desktop workloads via cloud-hosted workstations instead. Adding any other supported machine types can be easily configured into the application."),Object(o.b)("p",null,"This data model currently requires up-time figures per day, week, month and year. The purpose is to be able to calculate the associated emissions and energy usage with the time a server is active in the given time frame. To determine these values, it is recommended to set up an incremental aggregator that adds hours to each given up-time value when a server is active, and reset the value each day/week/month/year depending on the up-time key."),Object(o.b)("h3",{id:"methodology"},"Methodology"),Object(o.b)("p",null,"Based on our analysis to date, CCF is currently only able to make on-premise estimations for Compute and Memory usage. We welcome any insight and collaboration to determine estimations for other usage types such as Storage or Networking. Currently, only these operational emissions are supported. In the future, we hope to incorporate embodied emissions for on-premise as well."),Object(o.b)("p",null,"Our application parses the provided input CSV file and is able to iterate over each row through the same Compute and Memory formulas laid out in the main ",Object(o.b)("a",{parentName:"p",href:"https://www.cloudcarbonfootprint.org/docs/methodology"},"Methodology"),". It is able to map the machineName column to the associated microarchitecture and leverage the SpecPower Database to determine average compute and memory coefficients, like min/max watts and memory (GB), similar to how we grab these values for cloud providers."),Object(o.b)("p",null,"The main differences for the on-premise methodology are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Instead of using Virtual CPU Hours in the formula, we use CPU hours as the input data which concerns entire physical machines. We also provide some configuration options for various machine types that you can see below."),Object(o.b)("li",{parentName:"ul"},"The average PUE defaults to 1.58, based on this ",Object(o.b)("a",{parentName:"li",href:"https://journal.uptimeinstitute.com/data-center-pues-flat-since-2013/"},"Uptime Institute Report"),".")),Object(o.b)("p",null,"Note:\n",Object(o.b)("em",{parentName:"p"},"Unless there is a cpuUtilization value provided for each row in the input data, it is difficult to determine an accurate average utilization value used broadly across on-premise data centers. For now, we will continue to default to the projected estimate for the average server utilization of servers in hyperscale data centers in 2020 of 50%, from the ",Object(o.b)("a",{parentName:"em",href:"https://eta.lbl.gov/publications/united-states-data-center-energy"},"2016 U.S. Data Center Energy Usage Report"),".")),Object(o.b)("h3",{id:"configuration-options"},"Configuration Options"),Object(o.b)("p",null,"We have implemented custom configuration options to help on-premise consumers calculate more accurate estimations specific to their usage and available data rather than always relying on CCF averages and default values."),Object(o.b)("p",null,"The publicly available data from SpecPower Database that we rely on for the average or median min/max wattage values is only truly reliable when considering a full server. Since these values will likely differ significantly for laptop and desktop computers, we offer an option to configure a custom CPU Utilization value to use with the CCF default average watts based on SpecPower min/max watts, or instead, configure a custom Average Watts value per machine type to override the defaults."),Object(o.b)("p",null,"Set in the ",Object(o.b)("inlineCode",{parentName:"p"},"packages/cli/.env")," file, here is an example of how you would set the custom configurable values:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"ON_PREMISE?: {\n    SERVER?: {\n        CPU_UTILIZATION?: number\n        AVERAGE_WATTS?: number\n    }\n    LAPTOP?: {\n        CPU_UTILIZATION?: number\n        AVERAGE_WATTS?: number\n    }\n    DESKTOP?: {\n        CPU_UTILIZATION?: number\n        AVERAGE_WATTS?: number\n    }\n}\n")),Object(o.b)("p",null,"You can also view these configurations in more detail in our ",Object(o.b)("a",{parentName:"p",href:"https://www.cloudcarbonfootprint.org/docs/configurations-glossary#optionally-set-these-custom-configurations-for-on-premise-calculations"},"Configurations Glossary"),"."),Object(o.b)("h3",{id:"accessing-the-data"},"Accessing the Data"),Object(o.b)("p",null,"Currently, the CCF application only supports reading and writing to a CSV for measuring on-premise usage. In order to use our data model to calculate energy consumption and CO2e emissions associated with your on-premise usage, you must add your CSV file directly into the ",Object(o.b)("inlineCode",{parentName:"p"},"packages/cli")," directory. The CSV format must match the columns laid out in our data model. Otherwise, the data will not be able to be consumed by CCF."),Object(o.b)("p",null,"In your terminal, run the following command from the application root directory:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"yarn run estimate-on-premise-data --onPremiseInput [<Input File Name>]")),Object(o.b)("p",null,"You can optionally add the argument ",Object(o.b)("inlineCode",{parentName:"p"},"--onPremiseOutput [<Output File Name>]")," to specify the name of the output file which includes the same data from the input file as well as kilowattHours and co2e for each up-time increment appended as new columns."))}u.isMDXComponent=!0},126:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(a),b=n,d=m["".concat(i,".").concat(b)]||m[b]||p[b]||o;return a?r.a.createElement(d,l(l({ref:t},c),{},{components:a})):r.a.createElement(d,l({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);