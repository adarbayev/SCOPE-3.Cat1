// --- DATABASE ---
const emissionFactorsDB = [
    // Category 1: Control modules and wiring harnesses
    {
        id: 1001, year: 2023, category: 'Control modules and wiring harnesses', factorType: 'weight_components', country: 'China', unit: 'kgCO2e/kg', source: 'Example_CMWH_CH_23_SCS',
        rawMaterialEF: 3.0, rawMaterialDesc: "Copper Wiring & Mixed Plastics", rawMaterialUncertaintyPct: 20,
        scs1EF: 1.5, scs1Desc: "Component Manufacturing (ICs, connectors)", scs1UncertaintyPct: 25,
        scs2EF: 1.0, scs2Desc: "Harness Assembly & Soldering", scs2UncertaintyPct: 15,
        scs3EF: 0.0, scs3Desc: null, scs3UncertaintyPct: 0,
        factor: 5.5 // Sum: 3.0 + 1.5 + 1.0
    },
    {
        id: 1002, year: null, category: 'Control modules and wiring harnesses', factorType: 'weight_components', country: 'Global', unit: 'kgCO2e/kg', source: 'Example_CMWH_GLO_Generic_SCS',
        rawMaterialEF: 3.5, rawMaterialDesc: "Generic Electronics Components", rawMaterialUncertaintyPct: 30,
        scs1EF: 1.8, scs1Desc: "Generic Component Manufacturing", scs1UncertaintyPct: 30,
        scs2EF: 0.7, scs2Desc: "Generic Assembly", scs2UncertaintyPct: 25,
        scs3EF: 0.0, scs3Desc: null, scs3UncertaintyPct: 0,
        factor: 6.0 // Sum: 3.5 + 1.8 + 0.7
    },
    { id: 1004, year: null, category: 'Control modules and wiring harnesses', factorType: 'spend', country: 'Global', factor: 0.4, unit: 'kgCO2e/EUR', source: 'Example_CMWH_GLO_Generic_EUR', uncertainty_pct: 50 },
    { id: 1005, year: 2023, category: 'Control modules and wiring harnesses', factorType: 'spend', country: 'USA', factor: 0.45, unit: 'kgCO2e/USD', source: 'Example_CMWH_USA_23_USD', uncertainty_pct: 45 },

    // Category 2: Aluminium Rail
    {
        id: 2001, year: 2023, category: 'Aluminium Rail', factorType: 'weight_components', country: 'Germany', unit: 'kgCO2e/kg', source: 'Example_AluRail_DE_23_SCS',
        rawMaterialEF: 13.80, rawMaterialDesc: "Aluminum, wrought alloy", rawMaterialUncertaintyPct: 10,
        scs1EF: 1.22, scs1Desc: "RER: section bar extrusion, aluminum", scs1UncertaintyPct: 15,
        scs2EF: 2.07, scs2Desc: "Anodizing Aluminum Sheet", scs2UncertaintyPct: 20,
        scs3EF: 1.91, scs3Desc: "3-4 strokes finishing", scs3UncertaintyPct: 25,
        factor: 19.00 // Sum: 13.80 + 1.22 + 2.07 + 1.91
    },
    {
        id: 2003, year: null, category: 'Aluminium Rail', factorType: 'weight_components', country: 'Global', unit: 'kgCO2e/kg', source: 'Example_AluRail_GLO_Generic_SCS',
        rawMaterialEF: 12.0, rawMaterialDesc: "Generic Primary Aluminium", rawMaterialUncertaintyPct: 25,
        scs1EF: 1.5, scs1Desc: "Generic Extrusion", scs1UncertaintyPct: 30,
        scs2EF: 1.5, scs2Desc: "Generic Surface Treatment", scs2UncertaintyPct: 30,
        scs3EF: 0.0, scs3Desc: null, scs3UncertaintyPct: 0,
        factor: 15.0 // Sum: 12.0 + 1.5 + 1.5
    },
    { id: 2004, year: null, category: 'Aluminium Rail', factorType: 'spend', country: 'Global', factor: 0.8, unit: 'kgCO2e/EUR', source: 'Example_AluRail_GLO_Generic_EUR', uncertainty_pct: 50 },
    { id: 2005, year: 2023, category: 'Aluminium Rail', factorType: 'spend', country: 'China', factor: 0.9, unit: 'kgCO2e/USD', source: 'Example_AluRail_CH_23_USD', uncertainty_pct: 50 },

    // Category 3: Stamped steel panels
    {
        id: 3001, year: 2023, category: 'Stamped steel panels', factorType: 'weight_components', country: 'USA', unit: 'kgCO2e/kg', source: 'Example_SteelPan_USA_23_SCS',
        rawMaterialEF: 2.0, rawMaterialDesc: "Cold Rolled Steel Coil", rawMaterialUncertaintyPct: 15,
        scs1EF: 0.6, scs1Desc: "Stamping and Forming", scs1UncertaintyPct: 20,
        scs2EF: 0.5, scs2Desc: "Surface Treatment", scs2UncertaintyPct: 25,
        scs3EF: 0.0, scs3Desc: null, scs3UncertaintyPct: 0,
        factor: 3.1
    },
    {
        id: 3003, year: null, category: 'Stamped steel panels', factorType: 'weight_components', country: 'Global', unit: 'kgCO2e/kg', source: 'Example_SteelPan_GLO_Generic_SCS',
        rawMaterialEF: 2.2, rawMaterialDesc: "Generic Steel Sheet", rawMaterialUncertaintyPct: 30,
        scs1EF: 0.7, scs1Desc: "Generic Stamping", scs1UncertaintyPct: 30,
        scs2EF: 0.4, scs2Desc: "Basic Cleaning", scs2UncertaintyPct: 25,
        scs3EF: 0.0, scs3Desc: null, scs3UncertaintyPct: 0,
        factor: 3.3
    },
    { id: 3004, year: null, category: 'Stamped steel panels', factorType: 'spend', country: 'Global', factor: 0.25, unit: 'kgCO2e/EUR', source: 'Example_SteelPan_GLO_Generic_EUR', uncertainty_pct: 50 },
    { id: 3005, year: 2022, category: 'Stamped steel panels', factorType: 'spend', country: 'Global', factor: 0.28, unit: 'kgCO2e/USD', source: 'Example_SteelPan_GLO_22_USD', uncertainty_pct: 50 },

    // Category 4: Tempered laminated glass panels
    {
        id: 4001, year: 2023, category: 'Tempered laminated glass panels', factorType: 'weight_components', country: 'Germany', unit: 'kgCO2e/kg', source: 'Example_GlassPan_DE_23_SCS',
        rawMaterialEF: 1.8, rawMaterialDesc: "Float Glass Sheets", rawMaterialUncertaintyPct: 10,
        scs1EF: 1.2, scs1Desc: "Cutting and Edging", scs1UncertaintyPct: 15,
        scs2EF: 1.0, scs2Desc: "Tempering Process", scs2UncertaintyPct: 20,
        scs3EF: 0.5, scs3Desc: "Lamination with PVB Film", scs3UncertaintyPct: 25,
        factor: 4.5
    },
    {
        id: 4002, year: null, category: 'Tempered laminated glass panels', factorType: 'weight_components', country: 'Global', unit: 'kgCO2e/kg', source: 'Example_GlassPan_GLO_Generic_SCS',
        rawMaterialEF: 2.0, rawMaterialDesc: "Generic Glass", rawMaterialUncertaintyPct: 30,
        scs1EF: 1.3, scs1Desc: "Generic Shaping", scs1UncertaintyPct: 30,
        scs2EF: 1.0, scs2Desc: "Generic Tempering", scs2UncertaintyPct: 25,
        scs3EF: 0.5, scs3Desc: "Generic Lamination", scs3UncertaintyPct: 25,
        factor: 4.8
    },
    { id: 4003, year: null, category: 'Tempered laminated glass panels', factorType: 'spend', country: 'Global', factor: 0.6, unit: 'kgCO2e/EUR', source: 'Example_GlassPan_GLO_Generic_EUR', uncertainty_pct: 40 },
    { id: 4004, year: 2023, category: 'Tempered laminated glass panels', factorType: 'spend', country: 'USA', factor: 0.65, unit: 'kgCO2e/USD', source: 'Example_GlassPan_USA_23_USD', uncertainty_pct: 40 },

    // Category 5: Sealing gaskets and weather strips
    {
        id: 5001, year: 2023, category: 'Sealing gaskets and weather strips', factorType: 'weight_components', country: 'China', unit: 'kgCO2e/kg', source: 'Example_Seals_CH_23_SCS',
        rawMaterialEF: 4.0, rawMaterialDesc: "EPDM Rubber Granules", rawMaterialUncertaintyPct: 20,
        scs1EF: 1.5, scs1Desc: "Compounding and Mixing", scs1UncertaintyPct: 25,
        scs2EF: 0.7, scs2Desc: "Extrusion and Curing", scs2UncertaintyPct: 20,
        scs3EF: 0.0, scs3Desc: null, scs3UncertaintyPct: 0,
        factor: 6.2
    },
    {
        id: 5003, year: null, category: 'Sealing gaskets and weather strips', factorType: 'weight_components', country: 'Global', unit: 'kgCO2e/kg', source: 'Example_Seals_GLO_Generic_SCS',
        rawMaterialEF: 4.5, rawMaterialDesc: "Generic Rubber Compound", rawMaterialUncertaintyPct: 30,
        scs1EF: 1.5, scs1Desc: "Generic Processing", scs1UncertaintyPct: 30,
        scs2EF: 1.0, scs2Desc: "Generic Finishing", scs2UncertaintyPct: 25,
        scs3EF: 0.0, scs3Desc: null, scs3UncertaintyPct: 0,
        factor: 7.0
    },
    { id: 5004, year: null, category: 'Sealing gaskets and weather strips', factorType: 'spend', country: 'Global', factor: 0.9, unit: 'kgCO2e/EUR', source: 'Example_Seals_GLO_Generic_EUR', uncertainty_pct: 50 },
    { id: 5005, year: 2023, category: 'Sealing gaskets and weather strips', factorType: 'spend', country: 'Germany', factor: 1.0, unit: 'kgCO2e/USD', source: 'Example_Seals_DE_23_USD', uncertainty_pct: 45 },

    // Default Fallback Factors
    { id: 9000, year: null, category: 'Default Fallback', factorType: 'spend', country: 'Global', factor: 0.5, unit: 'kgCO2e/EUR', source: 'Generic_Spend_Fallback_GenericYr_EUR', uncertainty_pct: 60 },
    {
        id: 9001, year: null, category: 'Default Fallback', factorType: 'weight_components', country: 'Global', unit: 'kgCO2e/kg', source: 'Generic_Weight_Fallback_GenericYr_SCS',
        rawMaterialEF: 6.0, rawMaterialDesc: "Generic Raw Material", rawMaterialUncertaintyPct: 40,
        scs1EF: 2.0, scs1Desc: "Generic Primary Processing", scs1UncertaintyPct: 40,
        scs2EF: 2.0, scs2Desc: "Generic Secondary Processing", scs2UncertaintyPct: 35,
        scs3EF: 0.0, scs3Desc: null, scs3UncertaintyPct: 0,
        factor: 10.0
    },
    { id: 9002, year: null, category: 'Default Fallback', factorType: 'spend', country: 'Global', factor: 0.55, unit: 'kgCO2e/USD', source: 'Generic_Spend_Fallback_GenericYr_USD_Proxy', uncertainty_pct: 60 },
    { id: 9003, year: null, category: 'Default Fallback', factorType: 'spend', country: 'Global', factor: 0.45, unit: 'kgCO2e/GBP', source: 'Generic_Spend_Fallback_GenericYr_GBP_Proxy', uncertainty_pct: 60 }
];

// --- DOM Elements ---
const landingPageSection = document.getElementById('landingPageSection');
const appSection = document.getElementById('appSection');
const tryToolButton = document.getElementById('tryToolButton');
const form = document.getElementById('emissionForm');
const resultsDiv = document.getElementById('results');
const calculationMethodDisplaySpan = document.getElementById('calculationMethodDisplay');
const noFactorFoundDiv = document.getElementById('noFactorFound');
const factorDetailsDiv = document.getElementById('factorDetails');
const matchedFactorDescriptionSpan = document.getElementById('matchedFactorDescription');
const matchedFactorValueSpan = document.getElementById('matchedFactorValue');
const matchedFactorUnitTextSpan = document.getElementById('matchedFactorUnitText');
const factorComponentsDisplay = document.getElementById('factorComponentsDisplay');
const factorComponentsSumSpan = document.getElementById('factorComponentsSum');
const factorUncertaintyLine = document.getElementById('factorUncertaintyLine'); // New for factor uncertainty
const factorCalculatedUncertaintyPctDisplay = document.getElementById('factorCalculatedUncertaintyPctDisplay'); // New for factor uncertainty %
const matchedFactorSourceSpan = document.getElementById('matchedFactorSource');
const totalEmissionsSpan = document.getElementById('totalEmissions');
const infoIconContainer = document.getElementById('infoIconContainer');

const reportingYearInput = document.getElementById('reportingYear');
const calculationMethodRadios = document.querySelectorAll('input[name="calculationMethod"]');

const productCategorySection = document.getElementById('productCategorySection');
const productCategorySelect = document.getElementById('productCategory');

const countryOfOriginSection = document.getElementById('countryOfOriginSection');
const countryOfOriginSelect = document.getElementById('countryOfOrigin');
const quantityInput = document.getElementById('quantity');
const quantityUnitSelect = document.getElementById('quantityUnit');
const supplierPcfDetailsSection = document.getElementById('supplierPcfDetailsSection');
const supplierPcfValueInput = document.getElementById('supplierPcfValue');
const supplierPcfUnitSelect = document.getElementById('supplierPcfUnit');

const emissionFactorsTableBody = document.getElementById('emissionFactorsTableBody');
const messageBox = document.getElementById('messageBox');
const factorLogicModal = document.getElementById('factorLogicModal');
const closeModalButton = document.getElementById('closeModalButton');
const factorLogicContent = document.getElementById('factorLogicContent');
const tabCalculatorBtn = document.getElementById('tabCalculator');
const tabDocumentationBtn = document.getElementById('tabDocumentation');
const calculatorContentDiv = document.getElementById('calculatorContent');
const documentationContentDiv = document.getElementById('documentationContent');
const databaseTableContainer = document.getElementById('databaseTableContainer');
const expandTableButton = document.getElementById('expandTableButton');
const fullscreenTableModal = document.getElementById('fullscreenTableModal');
const fullscreenTableWrapper = document.getElementById('fullscreenTableWrapper');
const closeFullscreenTableButton = document.getElementById('closeFullscreenTableButton');
const mainTableWrapper = document.getElementById('tableWrapper');

let currentFactorLogic = "";

// --- Utility Functions ---
function formatNumber(num, decimalPlaces = 2) {
    if (isNaN(parseFloat(num))) return num;
    const fixedNum = parseFloat(num).toFixed(decimalPlaces);
    const parts = fixedNum.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return parts.join('.');
}

// --- UI Transitions and Tab Handling ---
if (tryToolButton) {
    tryToolButton.addEventListener('click', () => {
        if (landingPageSection && appSection) {
            landingPageSection.classList.add('hidden-transition');
            setTimeout(() => {
                landingPageSection.classList.add('hidden');
                appSection.classList.remove('hidden');
                void appSection.offsetWidth; 
                appSection.classList.add('visible');
                appSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 700);
        }
    });
}

function showTab(tabName) {
    if (calculatorContentDiv && documentationContentDiv && tabCalculatorBtn && tabDocumentationBtn) {
        if (tabName === 'calculator') {
            calculatorContentDiv.classList.remove('hidden');
            documentationContentDiv.classList.add('hidden');
            tabCalculatorBtn.classList.add('active');
            tabDocumentationBtn.classList.remove('active');
        } else if (tabName === 'documentation') {
            calculatorContentDiv.classList.add('hidden');
            documentationContentDiv.classList.remove('hidden');
            tabCalculatorBtn.classList.remove('active');
            tabDocumentationBtn.classList.add('active');
        }
    }
}
if (tabCalculatorBtn) tabCalculatorBtn.addEventListener('click', () => showTab('calculator'));
if (tabDocumentationBtn) tabDocumentationBtn.addEventListener('click', () => showTab('documentation'));

// --- Form Logic: Conditional Display and Dropdown Population ---
function populateQuantityUnits() {
    const selectedMethodRadio = document.querySelector('input[name="calculationMethod"]:checked');
    if (!selectedMethodRadio || !quantityUnitSelect) return;
    const selectedMethod = selectedMethodRadio.value;
    quantityUnitSelect.innerHTML = '';
    let options = [];
    if (selectedMethod === 'supplier') {
        options = [
            { value: "kg", text: "kg (Weight)" }, { value: "tonne", text: "tonne (Weight)" },
            { value: "EUR", text: "EUR (Spend)" }, { value: "USD", text: "USD (Spend)" },
            { value: "GBP", text: "GBP (Spend)" }
        ];
    } else if (selectedMethod === 'weight') {
        options = [{ value: "kg", text: "kg (Weight)" }, { value: "tonne", text: "tonne (Weight)" }];
    } else if (selectedMethod === 'spend') {
        options = [{ value: "EUR", text: "EUR (Spend)" }, { value: "USD", text: "USD (Spend)" }, { value: "GBP", text: "GBP (Spend)" }];
    }
    options.forEach(opt => {
        const optionEl = document.createElement('option');
        optionEl.value = opt.value; optionEl.textContent = opt.text;
        quantityUnitSelect.appendChild(optionEl);
    });
}

function updateFormDisplay() {
    const selectedMethodRadio = document.querySelector('input[name="calculationMethod"]:checked');
    if (!selectedMethodRadio) return;
    const selectedMethod = selectedMethodRadio.value;

    if (productCategorySection) productCategorySection.classList.add('hidden');
    if (countryOfOriginSection) countryOfOriginSection.classList.add('hidden');
    if (supplierPcfDetailsSection) supplierPcfDetailsSection.classList.add('hidden');

    if (countryOfOriginSelect) countryOfOriginSelect.value = '';
    if (productCategorySelect) productCategorySelect.value = '';
    if (supplierPcfValueInput) supplierPcfValueInput.value = '';
    if (supplierPcfUnitSelect) supplierPcfUnitSelect.value = '';

    if (selectedMethod === 'supplier') {
        if (productCategorySection) productCategorySection.classList.remove('hidden');
        if (supplierPcfDetailsSection) supplierPcfDetailsSection.classList.remove('hidden');
    } else if (selectedMethod === 'weight') {
        if (productCategorySection) productCategorySection.classList.remove('hidden');
        if (countryOfOriginSection) countryOfOriginSection.classList.remove('hidden');
    } else if (selectedMethod === 'spend') {
        if (productCategorySection) productCategorySection.classList.remove('hidden');
        if (countryOfOriginSection) countryOfOriginSection.classList.remove('hidden');
    }
    populateQuantityUnits();
}

if (calculationMethodRadios) {
    calculationMethodRadios.forEach(radio => radio.addEventListener('change', updateFormDisplay));
}

function populateStaticDropdowns() {
    if (productCategorySelect) {
        productCategorySelect.innerHTML = '<option value="">-- Select Category --</option>';
        const categories = [...new Set(emissionFactorsDB.map(f => f.category))].sort();
        categories.forEach(cat => {
            if (cat !== 'Default Fallback') {
                const option = document.createElement('option');
                option.value = cat; option.textContent = cat;
                productCategorySelect.appendChild(option);
            }
        });
    }
    if (countryOfOriginSelect) {
        countryOfOriginSelect.innerHTML = '<option value="">-- Select Country (Defaults to Global) --</option>';
        const countries = [...new Set(emissionFactorsDB.map(f => f.country).filter(c => c && c.trim() !== '' && c !== 'Global'))].sort();
        countries.forEach(country => {
            const option = document.createElement('option');
            option.value = country; option.textContent = country;
            countryOfOriginSelect.appendChild(option);
        });
    }
}

// --- Table Display and Modals ---
function displayEmissionFactors(tableBodyElement) {
    if (!tableBodyElement) return;
    tableBodyElement.innerHTML = '';
    emissionFactorsDB.forEach(factor => {
        const row = tableBodyElement.insertRow();
        let detailsOrMaterial = 'N/A';
        let uncertaintyDisplay = 'N/A';

        if (factor.factorType === 'weight_components') {
            detailsOrMaterial = factor.rawMaterialDesc || 'Component Based';
            uncertaintyDisplay = 'Calc.'; // Calculated on use
        } else if (factor.factorType === 'spend') {
            detailsOrMaterial = factor.material || 'N/A'; // Keep if material was used for spend previously
            uncertaintyDisplay = factor.uncertainty_pct ? `${factor.uncertainty_pct}%` : 'N/A';
        }


        row.innerHTML = `
            <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-500">${factor.id}</td>
            <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-500">${factor.year ?? 'Any'}</td>
            <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-900">${factor.category}</td>
            <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-500">${detailsOrMaterial}</td>
            <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-500">${factor.factorType === 'weight_components' ? 'Weight (Components)' : (factor.factorType === 'spend' ? 'Spend' : 'N/A')}</td>
            <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-500">${factor.country ?? 'Global'}</td>
            <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-500">${formatNumber(factor.factor, 4)}</td>
            <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-500">${factor.unit}</td>
            <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-500">${uncertaintyDisplay}</td>
            <td class="px-4 py-2 whitespace-nowrap text-sm text-gray-500">${factor.source}</td>
        `;
    });
}


function showMessage(message, type = 'success') {
    if (!messageBox) return;
    messageBox.textContent = message;
    messageBox.className = `message-box ${type} show`;
    setTimeout(() => { messageBox.classList.remove('show'); }, 3000);
}

function openModal() {
    if (factorLogicContent && factorLogicModal) {
        factorLogicContent.innerHTML = currentFactorLogic.replace(/\n/g, '<br>');
        factorLogicModal.classList.add('show');
    }
}

function closeModal() {
    if (factorLogicModal) {
        factorLogicModal.classList.remove('show');
    }
}
if (closeModalButton) closeModalButton.addEventListener('click', closeModal);
if (factorLogicModal) {
    factorLogicModal.addEventListener('click', (event) => {
        if (event.target === factorLogicModal) closeModal();
    });
}

if (expandTableButton) {
    expandTableButton.addEventListener('click', () => {
        if (mainTableWrapper && fullscreenTableWrapper && fullscreenTableModal) {
            const tableToClone = mainTableWrapper.querySelector('table');
            if (tableToClone) {
                const clonedTable = tableToClone.cloneNode(true);
                fullscreenTableWrapper.innerHTML = '';
                fullscreenTableWrapper.appendChild(clonedTable);
                fullscreenTableModal.classList.remove('hidden');
                setTimeout(() => fullscreenTableModal.classList.add('active'), 10);
                document.body.style.overflow = 'hidden';
            }
        }
    });
}

if (closeFullscreenTableButton) {
    closeFullscreenTableButton.addEventListener('click', () => {
        if (fullscreenTableModal) {
            fullscreenTableModal.classList.remove('active');
            setTimeout(() => fullscreenTableModal.classList.add('hidden'), 300);
            document.body.style.overflow = '';
        }
    });
}

// --- Core Emission Factor Logic ---
function findEmissionFactorFromDB(reportingYear, category, country, dbFactorType, targetSpendCurrency) {
    let targetUnitSubstrings = [];
    let logicTypeString = "";

    if (dbFactorType === 'weight_components') {
        targetUnitSubstrings.push('kgCO2e/kg');
        logicTypeString = "Weight (Components)";
    } else if (dbFactorType === 'spend') {
        if (targetSpendCurrency) {
            targetUnitSubstrings.push(`kgCO2e/${targetSpendCurrency}`);
            if (targetSpendCurrency !== 'EUR') {
                targetUnitSubstrings.push('kgCO2e/EUR');
            }
        }
        logicTypeString = `Spend (${targetSpendCurrency || 'N/A'})`;
    }

    const searchCountry = country?.trim() || 'Global';
    let logicTrace = [`DB Lookup for ${logicTypeString} factor. Reporting Year: ${reportingYear}, Category: '${category}'.`];
    if (searchCountry !== 'Global') logicTrace.push(`  - User Country: '${searchCountry}'`); else logicTrace.push(`  - User Country: Global (default or selected)`);
    if (dbFactorType === 'spend') logicTrace.push(`  - Target Currency: ${targetSpendCurrency} (may fallback to EUR for USD/GBP)`);

    let candidates = emissionFactorsDB.filter(f =>
        f.category === category &&
        f.factorType === dbFactorType &&
        (dbFactorType === 'weight_components' ? f.unit === 'kgCO2e/kg' : targetUnitSubstrings.some(sub => f.unit.includes(sub)))
    );
    logicTrace.push(`\nFound ${candidates.length} initial candidates for category '${category}', factor type '${dbFactorType}'.`);

    let usedFallbackCategoryInitially = (candidates.length === 0 && category !== 'Default Fallback');
    if (usedFallbackCategoryInitially) {
        logicTrace.push(`No specific category factors. Trying 'Default Fallback'.`);
        candidates = emissionFactorsDB.filter(f =>
            f.category === 'Default Fallback' &&
            f.factorType === dbFactorType &&
            (dbFactorType === 'weight_components' ? f.unit === 'kgCO2e/kg' : targetUnitSubstrings.some(sub => f.unit.includes(sub)))
        );
        logicTrace.push(`Found ${candidates.length} 'Default Fallback' candidates.`);
    }

    if (!candidates.length) {
        logicTrace.push("No suitable factors found even in fallback.");
        return { factor: null, logic: logicTrace.join('\n') };
    }

    logicTrace.push("\nScoring candidates:");
    const scoredCandidates = candidates.map(factor => {
        let score = 0;
        let scoreDetails = [];
        const factorCountry = factor.country ?? 'Global';
        const isFallbackFactor = factor.category === 'Default Fallback';

        // Fallback penalty
        if (isFallbackFactor) {
            score -= 50;
            scoreDetails.push("Fallback Factor: -50");
        }

        // Year Match Score
        let yearMatchScore = 0;
        if (factor.year === reportingYear) {
            yearMatchScore = 20; scoreDetails.push("Year Exact Match: +20");
        } else if (factor.year && factor.year < reportingYear) {
            if (reportingYear - factor.year <= 5) { // Most recent past (e.g. within 5 years)
                yearMatchScore = 15; scoreDetails.push(`Year Recent Past (${factor.year}): +15`);
            } else {
                yearMatchScore = 5; scoreDetails.push(`Year Older Past (${factor.year}): +5`);
            }
        } else if (factor.year === null) {
            yearMatchScore = 10; scoreDetails.push("Year Generic: +10");
        } else if (factor.year && factor.year > reportingYear) {
            yearMatchScore = 0; scoreDetails.push(`Year Future (${factor.year}): +0`); // No points for future
        }
        score += yearMatchScore;

        // Country Match Score
        let countryMatchScore = 0;
        if (factorCountry === searchCountry) {
            countryMatchScore = 20; scoreDetails.push(`Country Exact Match (${searchCountry}): +20`);
        } else if (factorCountry === 'Global' && searchCountry !== 'Global') {
            countryMatchScore = 10; scoreDetails.push("Country Factor Global, User Specific: +10");
        }
        score += countryMatchScore;

        // Currency Match Score (for spend-based)
        if (dbFactorType === 'spend' && targetSpendCurrency) {
            if (factor.unit === `kgCO2e/${targetSpendCurrency}`) {
                score += 10; scoreDetails.push(`Exact Currency Match (${targetSpendCurrency}): +10`);
            }
            // No specific bonus for EUR fallback here, it's just allowed by targetUnitSubstrings
        }
        
        logicTrace.push(`  Cand. ID ${factor.id} (Cat: ${factor.category}, Y:${factor.year ?? 'Any'}, C:${factorCountry}, Unit: ${factor.unit}) Score: ${score} [${scoreDetails.join('; ')}]`);
        return { ...factor, score, isFallbackFactor }; // Pass isFallbackFactor for tie-breaking
    });

    // Sort: Higher score is better. If scores are equal, prefer non-fallback.
    scoredCandidates.sort((a, b) => {
        if (b.score === a.score) {
            return a.isFallbackFactor - b.isFallbackFactor; // false (0) comes before true (1)
        }
        return b.score - a.score;
    });

    const bestMatch = scoredCandidates.length > 0 ? scoredCandidates[0] : null;

    if (bestMatch) {
        logicTrace.push(`\nSelected factor ID ${bestMatch.id} (Score: ${bestMatch.score}) from DB. Total Factor: ${bestMatch.factor} ${bestMatch.unit}`);
        // Calculate uncertainty for the selected factor
        if (bestMatch.factorType === 'weight_components') {
            let sumOfSquaredAbsoluteUncertainties = 0;
            const components = ['rawMaterial', 'scs1', 'scs2', 'scs3'];
            components.forEach(compKey => {
                const ef = bestMatch[compKey + 'EF'];
                const uncPct = bestMatch[compKey + 'UncertaintyPct'];
                if (ef && typeof uncPct === 'number') {
                    const absUnc = ef * (uncPct / 100);
                    sumOfSquaredAbsoluteUncertainties += Math.pow(absUnc, 2);
                }
            });
            const absUncTotalEF = Math.sqrt(sumOfSquaredAbsoluteUncertainties);
            // bestMatch.factor is the total EF (sum of components)
            if (bestMatch.factor > 0) {
                bestMatch.calculated_uncertainty_pct = (absUncTotalEF / bestMatch.factor) * 100;
                 logicTrace.push(`  Calculated Weight Component Uncertainty: ${formatNumber(bestMatch.calculated_uncertainty_pct,1)}%`);
            } else {
                bestMatch.calculated_uncertainty_pct = 0;
            }
        } else if (bestMatch.factorType === 'spend') {
            bestMatch.calculated_uncertainty_pct = bestMatch.uncertainty_pct || 0; // Use stored or default to 0
            logicTrace.push(`  Spend Factor Uncertainty: ${formatNumber(bestMatch.calculated_uncertainty_pct,1)}%`);
        }
    } else {
        logicTrace.push("\nNo candidate from DB scored high enough or matched criteria after detailed scoring.");
    }
    return { factor: bestMatch, logic: logicTrace.join('\n') };
}


// --- Form Submission and Calculation ---
if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Reset UI elements
        if (resultsDiv) resultsDiv.classList.add('hidden');
        if (noFactorFoundDiv) noFactorFoundDiv.classList.add('hidden');
        if (factorDetailsDiv) factorDetailsDiv.classList.add('hidden');
        if (factorComponentsDisplay) factorComponentsDisplay.classList.add('hidden');
        if (factorUncertaintyLine) factorUncertaintyLine.classList.add('hidden');
        if (factorComponentsSumSpan) factorComponentsSumSpan.textContent = '';
        if (factorCalculatedUncertaintyPctDisplay) factorCalculatedUncertaintyPctDisplay.textContent = '';
        if (infoIconContainer) infoIconContainer.innerHTML = '';
        if (calculationMethodDisplaySpan) calculationMethodDisplaySpan.textContent = '';
        if (totalEmissionsSpan) totalEmissionsSpan.classList.remove('high-uncertainty');

        currentFactorLogic = "";

        const formData = new FormData(form);
        const reportingYear = parseInt(formData.get('reportingYear')) || new Date().getFullYear();
        const calculationMethod = formData.get('calculationMethod');
        const category = formData.get('productCategory');
        const country = formData.get('countryOfOrigin');
        const quantity = parseFloat(formData.get('quantity'));
        const quantityUnit = formData.get('quantityUnit');

        if (isNaN(quantity) || quantity <= 0) { showMessage('Please enter a valid quantity.', 'error'); return; }
        if (!quantityUnit) { showMessage('Please select a unit for quantity/amount.', 'error'); return; }

        let effectiveQuantity = quantity;
        let finalFactorValue;
        let displayFactorUnit = "";
        let finalFactorSource = "";
        let finalMatchedFactorDescription = "";
        let calculatedEmissionsKg;
        let factorOverallUncertaintyPct = 0;


        if (calculationMethodDisplaySpan) {
            calculationMethodDisplaySpan.textContent = `Calculation based on: ${calculationMethod.charAt(0).toUpperCase() + calculationMethod.slice(1).replace('-', ' ')} Method.`;
        }

        if (calculationMethod === 'supplier') {
            // Supplier-specific logic (uncertainty not handled here unless user inputs it, which is not current scope)
            const supplierPcfValue = parseFloat(formData.get('supplierPcfValue'));
            const supplierPcfUnit = formData.get('supplierPcfUnit');

            if (isNaN(supplierPcfValue) || supplierPcfValue <= 0 || !supplierPcfUnit) {
                showMessage('For Supplier-Specific method, please provide a valid PCF value and unit.', 'error'); return;
            }
            finalMatchedFactorDescription = category ? `${category} (Supplier PCF)` : `Supplier PCF`;
            finalFactorSource = "Supplier-Specific Data";
            currentFactorLogic = `Using supplier-specific PCF: ${formatNumber(supplierPcfValue, 4)} ${supplierPcfUnit}.\nInput Quantity: ${formatNumber(quantity)} ${quantityUnit}.`;
            // For supplier data, we don't have component uncertainties from DB. Assume 0 or prompt user in a future version.
            factorOverallUncertaintyPct = 0; // Or a default/user-input if feature is added
            if(factorUncertaintyLine) factorUncertaintyLine.classList.add('hidden');


            const quantityIsWeight = ['kg', 'tonne'].includes(quantityUnit);
            const pcfIsWeightBased = supplierPcfUnit.endsWith('/kg') || supplierPcfUnit.endsWith('/tonne');
            const quantityIsSpend = ['EUR', 'USD', 'GBP'].includes(quantityUnit);
            const pcfIsSpendBased = supplierPcfUnit.endsWith('/EUR') || supplierPcfUnit.endsWith('/USD') || supplierPcfUnit.endsWith('/GBP');

            if (!((quantityIsWeight && pcfIsWeightBased) || (quantityIsSpend && pcfIsSpendBased))) {
                showMessage('Unit mismatch: Quantity unit type (weight/spend) must match Supplier PCF unit type.', 'error');
                if(noFactorFoundDiv) noFactorFoundDiv.innerHTML = `Error: Quantity unit (${quantityUnit}) and Supplier PCF unit (${supplierPcfUnit}) are incompatible.`;
                if(noFactorFoundDiv) noFactorFoundDiv.classList.remove('hidden');
                if(resultsDiv) resultsDiv.classList.remove('hidden');
                if(resultsDiv) resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' }); return;
            }
            if (quantityIsSpend && pcfIsSpendBased && !supplierPcfUnit.endsWith('/' + quantityUnit)) {
                showMessage(`Currency mismatch: Quantity currency (${quantityUnit}) must match Supplier PCF currency (${supplierPcfUnit.split('/')[1]}).`, 'error');
                if(noFactorFoundDiv) noFactorFoundDiv.innerHTML = `Error: Supplier PCF currency (${supplierPcfUnit.split('/')[1]}) must match quantity currency (${quantityUnit}).`;
                if(noFactorFoundDiv) noFactorFoundDiv.classList.remove('hidden');
                if(resultsDiv) resultsDiv.classList.remove('hidden');
                if(resultsDiv) resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' }); return;
            }

            finalFactorValue = supplierPcfValue;
            displayFactorUnit = supplierPcfUnit;

            if (supplierPcfUnit.endsWith('/tonne')) {
                finalFactorValue /= 1000;
                displayFactorUnit = `${supplierPcfUnit} (becomes ${formatNumber(finalFactorValue, 4)} kgCO2e/kg)`;
            }
            if (quantityUnit === 'tonne') effectiveQuantity *= 1000;
            calculatedEmissionsKg = effectiveQuantity * finalFactorValue;

        } else { // Weight-based or Spend-based (Database lookup)
            if (!category) {
                showMessage(`Please select a product category for ${calculationMethod}-based calculation.`, 'error');
                if(resultsDiv) resultsDiv.classList.remove('hidden');
                if(noFactorFoundDiv) noFactorFoundDiv.innerHTML = `Error: Product category is required for ${calculationMethod}-based calculations.`;
                if(noFactorFoundDiv) noFactorFoundDiv.classList.remove('hidden');
                if(resultsDiv) resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
                return;
            }

            const dbFactorType = calculationMethod === 'weight' ? 'weight_components' : 'spend';
            const targetSpendCurrency = (calculationMethod === 'spend') ? quantityUnit : null;

            const { factor: matchedFactor, logic: matchLogic } = findEmissionFactorFromDB(reportingYear, category, country, dbFactorType, targetSpendCurrency);
            currentFactorLogic = matchLogic;

            if (!matchedFactor) {
                if(noFactorFoundDiv) noFactorFoundDiv.innerHTML = `No suitable emission factor found in database.<br><br><strong>Selection attempt logic:</strong><br>${matchLogic.replace(/\n/g, '<br>')}`;
                if(noFactorFoundDiv) noFactorFoundDiv.classList.remove('hidden');
                if(resultsDiv) resultsDiv.classList.remove('hidden');
                showMessage('No suitable emission factor found in DB.', 'error');
                if(resultsDiv) resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' }); return;
            }

            finalFactorValue = matchedFactor.factor;
            displayFactorUnit = matchedFactor.unit;
            finalFactorSource = matchedFactor.source;
            factorOverallUncertaintyPct = matchedFactor.calculated_uncertainty_pct || 0;


            if (dbFactorType === 'weight_components') {
                finalMatchedFactorDescription = `${matchedFactor.category} - ${matchedFactor.rawMaterialDesc}`;
                if (matchedFactor.scs1Desc) finalMatchedFactorDescription += ` -> ${matchedFactor.scs1Desc}`;
                if (matchedFactor.scs2Desc) finalMatchedFactorDescription += ` -> ${matchedFactor.scs2Desc}`;
                if (matchedFactor.scs3Desc) finalMatchedFactorDescription += ` -> ${matchedFactor.scs3Desc}`;

                let components = [];
                if (matchedFactor.rawMaterialEF > 0) components.push(formatNumber(matchedFactor.rawMaterialEF, 2));
                if (matchedFactor.scs1EF > 0) components.push(formatNumber(matchedFactor.scs1EF, 2));
                if (matchedFactor.scs2EF > 0) components.push(formatNumber(matchedFactor.scs2EF, 2));
                if (matchedFactor.scs3EF > 0) components.push(formatNumber(matchedFactor.scs3EF, 2));
                
                if(factorComponentsSumSpan) factorComponentsSumSpan.textContent = `(${components.join(' + ')})`;
                if(factorComponentsDisplay) factorComponentsDisplay.classList.remove('hidden');
                if(factorCalculatedUncertaintyPctDisplay) factorCalculatedUncertaintyPctDisplay.textContent = formatNumber(factorOverallUncertaintyPct, 1);
                if(factorUncertaintyLine) factorUncertaintyLine.classList.remove('hidden');


            } else { // Spend-based
                finalMatchedFactorDescription = `${matchedFactor.category} (${matchedFactor.country ?? 'Global'}, Year: ${matchedFactor.year ?? 'Any'})`;
                if (targetSpendCurrency !== 'EUR' && matchedFactor.unit === 'kgCO2e/EUR') {
                    displayFactorUnit += ` (used as proxy for ${targetSpendCurrency})`;
                }
                if(factorCalculatedUncertaintyPctDisplay) factorCalculatedUncertaintyPctDisplay.textContent = formatNumber(factorOverallUncertaintyPct, 1);
                if(factorUncertaintyLine) factorUncertaintyLine.classList.remove('hidden');
            }

            if (infoIconContainer) {
                const infoIcon = document.createElement('span');
                infoIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 inline-block info-icon"><path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a1 1 0 0 0 0 2v3a1 1 0 0 0 1 1h1a1 1 0 1 0 0-2v-3a1 1 0 0 0-1-1H9Z" clip-rule="evenodd" /></svg>`;
                infoIcon.title = "Show selection logic"; infoIcon.onclick = openModal;
                infoIconContainer.appendChild(infoIcon);
            }

            if (calculationMethod === 'weight' && quantityUnit === 'tonne') {
                effectiveQuantity *= 1000;
            }
            calculatedEmissionsKg = effectiveQuantity * finalFactorValue;
        }

        // Display results
        if (matchedFactorDescriptionSpan) matchedFactorDescriptionSpan.textContent = finalMatchedFactorDescription;
        if (matchedFactorValueSpan) matchedFactorValueSpan.textContent = formatNumber(finalFactorValue, 4);
        if (matchedFactorUnitTextSpan) matchedFactorUnitTextSpan.textContent = displayFactorUnit;
        if (matchedFactorSourceSpan) matchedFactorSourceSpan.textContent = finalFactorSource;
        
        const calculatedEmissionsTonnes = calculatedEmissionsKg / 1000;
        const uncertaintyValueTonnes = calculatedEmissionsTonnes * (factorOverallUncertaintyPct / 100);

        if (totalEmissionsSpan) {
            totalEmissionsSpan.textContent = `${formatNumber(calculatedEmissionsTonnes, 2)} ± ${formatNumber(uncertaintyValueTonnes, 2)}`;
            if (factorOverallUncertaintyPct > 25) {
                totalEmissionsSpan.classList.add('high-uncertainty');
            } else {
                totalEmissionsSpan.classList.remove('high-uncertainty');
            }
        }
        
        if(!factorOverallUncertaintyPct > 0 && factorUncertaintyLine){ // Hide if uncertainty is 0 or N/A
             factorUncertaintyLine.classList.add('hidden');
        }


        if (factorDetailsDiv) factorDetailsDiv.classList.remove('hidden');
        if (resultsDiv) resultsDiv.classList.remove('hidden');
        showMessage('Emissions calculated successfully!', 'success');
        if (resultsDiv) resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    populateStaticDropdowns();
    if (emissionFactorsTableBody) {
        displayEmissionFactors(emissionFactorsTableBody);
    }
    if (reportingYearInput) {
        reportingYearInput.value = new Date().getFullYear();
    }
    updateFormDisplay();
    showTab('calculator');

    if (appSection && landingPageSection) {
        appSection.classList.add('hidden');
        appSection.classList.remove('visible');
        landingPageSection.classList.remove('hidden', 'hidden-transition');
    }
});
