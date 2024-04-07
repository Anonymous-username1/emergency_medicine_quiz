/* This is a 2-Dimensional array, it will be shuffled by my programme to ensure the questions are random 
for each user.
Its 2D nature allows me to ask a series of questions on a related topic before moving on to the next topic
Questions should pass the:
- Cover test - you should be able to cover the asnwers and answer the question without looking at the mutliple choices.
- Answers should be related to the vignettes - to make it an Applied test, and not a test of knowledge.

Use the Dutch question bank example.

https://onlinelibrary.wiley.com/doi/epdf/10.1111/medu.13648?saml_referrer

My array contains object literals. This is different to JSON text.
In order to format the html into paragraphs use `` insitead of "", or '', and just write it how you normally would.
This is called using template literals, and allows you to format the text within the object literals how you want.

*/

const quizData = [[
    {
        question: `A 35-year-old man with a history of type 1 diabetes presents to ED with vomiting, abdominal pain, and increased thirst. On examination, the patient is dehydrated. The patient reports missing his insulin doses for the past two days due to being unwell.
        
        Bloods and tests during admission reveal: 
        pH 7.2 (7.35-7.45) 
        Bicarbonate 10 mmol/L (22-29) 
        Blood glucose 25 mmol/L
        Urine ketones ++
        His weight is 78.8kg
        
        He is prescribed fluids and you review him 1 hour later. You note that his blood glucose levels remains high at 22 mmol/L. What is your next management plan?`,
        image: 'none',
        a: "Start an infusion of 50 units Actrapid at a rate of 6 units/hr, and then titrate it to the next hourly capillary blood glucose",
        b: "Add an infusion of 10% dextrose at 60ml/hr to the current fluid regime",
        c: "Stop the infusion of fluids, encourage them to eat and drink, and start a basal bolus regimen of insulin",
        d: "Start an infusion of 50 units Actrapid at a rate of 8 units/hr",
        correct: "d",
        explanationTitle:"Diabetic Ketoacidosis",
        link: 'https://sites.google.com/exeter.ac.uk/revision-guide/home/diabetic-ketoacidosis',
        explanation: `The mainstay of DKA management is with fluid resuscitation. However, when the serum glucose fails to fall by 3mmol/l every hour, the patient is started on fixed rate IV insulin infusion. Adding 10% dextrose and stopping the infusion or encouraging the patient to eat and drink would be inappropriate. The patient will receive IV insulin at a rate of 0.1 units/kg/hr. Since the patient weighs 78.8kg (78.8 x 0.1 = 7.88), he will receive insulin at 8 units/hr.`,
    },
    {
        question: `A 65-year-old gentleman presents with a 3 week history of general malaise, decreased oral intake and drowsiness. He has a past medical history of ischaemic heart disease, type 2 diabetes mellitus and gastritis. He lives alone with no carers and normally mobilises independently. A concerned neighbour went in to check on him after he was not seen for a few days. On examination his mouth is dry with reduced skin turgor. Heart sounds are normal, chest is clear, abdominal palpation reveals lower abdominal tenderness. ECG shows sinus tachycardia. Urine dip shows ketones +, glucose +++.
        
        His Bloods show:
        Hb 140g/l
        Platelets 525 * 10^9/l      
        WCC 14 * 10^9/l             
        Neut 10 * 10^9/l            
        Lymphs 2 * 10^9/l           
        Eosin 0.5 * 10^9/l

        Na+ 150 mmol/l
        K+ 4.2 mmol/l
        Urea 13 mmol/l
        Creatinine 160µmol/l
        CRP 56 mg/l
        
        Venous blood gas shows no signs of acidosis. Formal blood glucose is phoned back as 40 mmol/l. So you start IV fluids, and 6 hours later the blood glucose no longer respond to fluids. What is the most important next step?`,
        image: 'none',
        a: "Intravenous Insulin Infusion at 0.05 units/kg/hr",
        b: "Low molecular weight Heparin",
        c: "Subcutaneous insulin",
        d: "Intravenous Insulin Infusion at 0.1 units/kg/hr",
        correct: "a",
        explanationTitle:"Hyperosmolar hyperglycemic state",
        link: 'https://sites.google.com/exeter.ac.uk/revision-guide/home/hyperosmolar-hyperglycaemic-state',
        explanation: `This patient gradually becomes unwell and develops symptoms consistent with poor glucose tolerance. Bloods show a very high capillary glucose of 40mmol/l, and urine dipstick show high glucose content, however urine dipstick also shows low ketones. The patient's serum osmolality works out as (2[Na] + urea + glucose = 2[150] + 13 + 40) 353 mosmol/l. This is greater than the normal range of < 320mosmol/l. This patient is in hyperosmolar hyperglycaemic state. 
        
        The mainstay of HHS management is with IV fluids much like DKA. However, once serum glucose fail to decrease with fluids, the patient should be started on 0.05 units/kg/hr of Insulin. Therefore, subcutaneous insulin and fixed rate insulin at a rate of 0.1 units/kg/hr would be inappropriate. Patients in HHS will have high serum viscosity; therefore they will require LMWH to prevent VTE, however this comes after the patient is stabilised.
        `,
    },
    {
        question: `A 21-year-old woman presents to the ED with nausea and abdominal pain. There is also a 'pear drops' smell on her breath. She is admitted and started on aggressive IV fluid replacement and insulin according to national protocol. After 24 hours, she is still not eating or drinking and her observations show that she is tachycardic but otherwise stable.
        
        An arterial blood gas reveals a pH of 7.28 and her blood results are:
        Plasma glucose 15.6 mmol/l 
        Na+ 136 mmol/l (135-145)
        K+ 4.6 mmol/l (3.5-5.0)
        Bicarbonate 13 mmol/l (22-29)
        Ketones 4.5 mmol/l (<3)
        
        What is the next best step?`,
        image: 'none',
        a: "Admission to intensive care unit (ICU)",
        b: "Continue with fluid replacement at the current rate", 
        c: "Endocrinology review",
        d: "Increase insulin rate",
        correct: "c",
        explanationTitle:"Diabetic Ketoacidosis",
        link: 'https://sites.google.com/exeter.ac.uk/revision-guide/home/diabetic-ketoacidosis',
        explanation: `The patient presents with symptoms consistent with DKA. Once the DKA protocol is activated and if after 24 hours there is still significant ketonemia and acidosis, the patient should be reviewed by an endocrinology consultant. This is to consider alternate diagnoses and to advise on further treatment. Treatment should reduce blood ketones by around 1 mmol/hr and glucose by around 3 mmol/hr. Clinically the patient is expected to be eating and drinking normally by 24 hrs, and at this point can be switched to subcutaneous insulin. 
        
        The patient is currently stable, therefore admission to ICU is not required. Since the DKA still has not resolved, it would be inappropriate to stop fluid management. Finally, an endocrinologist should be consulted before considering increasing the patient's insulin, as this may lead to hypoglycaemia.
        `,
    },
    {
        question: `An 11-year-old girl is brought into the ED with a 3-day history of abdominal pain, vomiting, polyuria and reduced eating and drinking. She has no past medical history nor is she on any regular medications.

        The patient appears unwell with evidence of significant dehydration, a raised respiratory rate and signs of shock. Blood glucose was 20 mmol/l, blood ketone was 5 mmol/l, and VBG showed severe metabolic acidosis. After, a few hours of aggressive fluid resuscitation and IV Insulin infusions, the girl becomes more irritable, complains of headache, and visual disturbance. What is your next management plan?`,
        image: 'none',
        a: "Stop treatment and refer to Endocrinology",
        b: "Presrcibe dexamethasone",
        c: "Add 10% Dextrose at 125ml/hr to the current fluid regime",
        d: "Urgent CT head and senior review",
        correct: "d",
        explanationTitle:"Diabetic Ketoacidosis",
        link: 'https://sites.google.com/exeter.ac.uk/revision-guide/home/diabetic-ketoacidosis',
        explanation: `This boy presents with symptoms of abdominal pain, nausea and vomiting. He has elevated blood ketones, a blood sugar > 11 mmol/L and a pH of < 7.30, so he meets diagnostic criteria for diabetic ketoacidosis (DKA). He is appropriately treated with intravenous fluids and insulin. However, an important complication of rapid fluid resuscitation in DKA is cerebral oedema, which can cause headache, irritability, seizures and ultimately coma and death. 
        
        IV insulin and fluids can cause a global drop in osmolarity which drives water into neurones. Neurones in the brain are sensitive to swelling as they are trapped in the skull. Children have less room for expansion within their cranial vault compared to adults. Therefore, cerebral oedema occurs in 1% of treatments for DKA, but this is more likely to occur in young patient.
        `,

    },

], [
    {
        question: `A 75yo man presents to ED acutely confused, SOB, and coughing. He hasn't passed urine for over 24hrs. This is on a background of COPD, paroxysmal atrial fibrillation, hypertension, and type 2 diabetes. 

        Blood tests show:
        Creatinine 447 µmol/l (baseline 135 µmol/l)
        Hb 87 g/L
        MCV 88 fL
        WCC 18 * 109/L
        Neut 9 * 109/L
        Eosin 1.17 * 109/L
        CRP 147 mg/L

        You calculate his eGFR to be 41 and diagnose this patient with AKI stage 3 on CKD stage 3b. What immediate assessments would you perform to rule out the most serious complications?`,
        image: `none`,
        a: "Clinical assessment, CXR, U&Es, VBG",
        b: "Clinical assessment, VBG, urinary electrophoresis for multiple myeloma, FBC",
        c: "Kidney USS, renal biopsy, U&Es, urine dipstick",
        d: "CXR, Abdominal CT, kidney USS, VBG",
        correct: "a",
        explanationTitle:"Acute Kindey Injury",
        link: 'https://sites.google.com/exeter.ac.uk/revision-guide/home/acute-kidney-injury',
        explanation: `A fall in urine output to less than 0.5ml/kg/hr for more than 6 hours in adults is a criterion for diagnosing AKI. A fall in urine output to < 0.3 ml/kg/hr for ≥ 24 hours is a criterion for diagnosing AKI stage 3. The rise in creatinine by more than 3 times the baseline confirms this.
        
        The initial investigations for AKI should focus on ruling out the life threatening features that necessitate referral to Nephrology or ITU for dialysis. This includes signs of uraemia, pulmonary oedema, hyperkalaemia, and acidosis (pH < 7.1). These would be investigated with clinical assessment, CXR, U&Es, and VBG respectively. 
        `,
    },
    {
        question: `A 44yo man is referred to the renal team. He has a long history of chronic sinusitis and was investigated last year for haemoptysis but no cause was found. Recently he is being investigated for hypertension. A number of recent urine dipstick tests has shown persistent microscopic haematuria.
        
        You have ruled out life-threatening features requiring dialysis.
        
        Blood tests show:
        Na+ 140mmol/l (135-145)
        K+ 4.8 mmol/l (3.5-4.5)
        Urea 11.1 mmol/l (2.0-7)
        Creatinine 145 µmol/l (baseline 70)
        
        What specific tests would you request to diagnose him?`,
        image: `none`,
        a: "Renal artery USS",
        b: "ANCA PR3 & MPO, Complement 3 & 4, HBV, HCV, HIV",
        c: "Kidney and bladder USS",
        d: "FBC, eosinophils, Creatine Kinase, Albumin, urine myoglobin",
        correct: "b",
        explanationTitle:"Acute Kindey Injury",
        link: 'https://sites.google.com/exeter.ac.uk/revision-guide/home/acute-kidney-injury',
        explanation: `This man has elevated creatine, decreased BUN, on a background of chronic sinusitis, investigation for haemoptysis, and hypertension. 
        
        The history and the BUN ratio are specific for an intra-renal cause for his AKI, furthermore his urine shows microscopic haematuria. 
        
        This rules out renal artery stenosis (investigated with renal artery USS), and post-renal obstruction (investigated with kidney and bladder USS). 
        
        Furthermore, there is no evidence of fall with prolonged lie, no evidence of tea coloured urine, no evidence of white casts in urine, and no evidence of nephrotoxic drugs. This rules out Acute tubular necrosis and Acute interstitial nephritis as causes of AKI. The only remaining option is glomerulonephritis.
        `,
    },
    {
        question: `A 65yo man undergoes an anterior resection for colorectal cancer. He received a transfusion of 5 units of packed red cells to cover perioperative blood loss. He is currently asymptomatic.

        Investigations show the following:
        Hb 136 g/L	Male: (135-180)
        Platelets 200 * 10^9 /L (150 - 400)
        WBC 10.0 * 109 /L (4.0 - 11.0)
        Na+ 137 mmol/L (135 - 145)
        K+ 6.1 mmol/L (3.5 - 5.0)
        Urea 6.0 mmol/L (2.0 - 7.0)
        Creatinine 119 µmol/L (55 - 120)
        
        You also perform an ECG (which is attached below). What is the most definite way to manage him?`,
        image: `https://litfl.com/wp-content/uploads/2018/08/ECG-Hyperkalaemia-peaked-T-waves-serum-potassium-7.0.jpg`,
        a: "Calcium gluconate",
        b: "Salbutamol", 
        c: "Insulin + Dextrose",
        d: "Sodium Zirconium Cyclosilicate",
        correct: "d",
        explanationTitle:"Acute Kindey Injury",
        link: 'https://sites.google.com/exeter.ac.uk/revision-guide/home/acute-kidney-injury',
        explanation: `Calcium gluconate is the initial management step, to stabilise the myocardium. Insulin + Dextrose, and Salbutamol might be the next management steps to rapidly lower his serum potassium. However, they will only cause a transient intracellular shift of this potassium. Sodium Zirconium Cyclosilicate definitively gets rid of potassium from the body.`,
    },
    {
        question: `A 75yo woman is admitted to ED after 11 days ago she developed nausea, vomiting, reduced appetite, and having bowels not open. This is on a background of type 2 diabetes, CKD 3a, and hypertension. She takes Linagliptin, Amitriptyline, atorvastatin, gliclazide, metformin, and losartan. 
        
        Today she says that she has passed roughly 500ml urine in the last 24 hours. She weighs 75kg. O/E her pulse is 110 bpm, respiratory rate is 22 breaths/min, blood pressure is 168/93 mmHg. Capillary ketone is 0.2mmol/l, and capillary glucose is 26 mmol/l.
        
        Her bloods show:
        Haemoglobin 10.7 g/l    (<125)
        WBC 16.4x10^9 /l    (135-180)
        Platelets 389x10^3 mmol/l    (150 - 400)
        Neutrophils 14.4x10^9 /l    (2.5-6.0)
        Na 129 mmol/l    (135-145)
        K 4.9 mmol/l    (3.5-5.0)
        Urea 49.7 mmol/l    (2.0 - 7.0)
        Creatinine 1105 µmol/l    (55 - 120)
        
        VBG shows:
        pH 7.07 mmol/l    (7.31-7.41)
        pCO2 4.97 mmol/l    (5.5-6.8)
        pO2 4.78 mmol/l    (5.8-6.4)
        HCO3 14.3 mmol/l    (22-28)
        Lactate 2.9 mmol/l    (0.5-1.6)
        
        What is the most definitive management?`,
        image: `none`,
        a: "Refer to ITU",
        b: "Prescribe IV fluids and IV insulin at 0.05 units/kg/hr",
        c: "Prescribe IV fluids and IV insulin at 0.1 units/kg/hr",
        d: "Refer to Renal team",
        correct: "d",
        explanationTitle:"Acute Kindey Injury",
        link: 'https://sites.google.com/exeter.ac.uk/revision-guide/home/acute-kidney-injury',
        explanation: `This patient presents with a prolonged period of being unwell. Over time, her blood glucose has risen to 26 mmol/l. However, ketones are normal, and her osmolality is high (since 2[Na] + urea + glucose, for her 2[129] + 49.7 + 26 = 335.1 mosmol/kg, and 335.1 > 320). This patient is in Hyperosmolar hyperglycaemic state. Furthermore, she has passed < 0.3ml/kg/hr of urine in 24 hours (500 / 24 / 75 = 0.28ml/kg/hr), so she is in AKI stage 3. 
        
        Her pH is below 7.10 and her BP is stable, these are both indications for haemodialysis which she can receive if she was referred to the renal department. It would be incorrect to refer her to ITU as they will look after haemodynamically unstable patients who would benefit more from hemofiltration Since, unstable patients are more likely to develop shock if they receive dialysis. Prescribing IV fluid or insulin would be inappropriate since this patient is in AKI and need dialysis.
        `,

    },

], [
    {
        question: `A 79yo man was watching television 4.8 hours ago, when he suddenly felt the left side of his face wrinkle up. Then he noticed that he was becoming breathless when eating and constantly coughing, and his wife said he sounded funny. He decided to call 999, and was admitted to ED. This is on a background of warfarin use, hypertension, atrial fibrillation, a transient ischaemic attack one year ago, and sleep apnoea.
        
        Observations show a pulse of 98bpm, blood pressure of 189/124 mmHg, and respiratory rate of 20 breaths/min. His blood tests show an INR of 3.8 (2-3).
        
        A CT without contrast is requested, and this is displayed below.
        
        What is the initial management step?`,
        image: `https://prod-images-static.radiopaedia.org/images/3251974/11274cdbb5fa0a305ab53bdf31ecc8_big_gallery.jpg`,
        a: "Rapid blood pressure lowering",
        b: "IV vitamin K and PCC", 
        c: "Aspirin 300mg",
        d: "Slowly reduce blood pressure and refer to Neurosurgery",
        correct: "a",
        explanationTitle:"Stroke",
        link: 'https://sites.google.com/exeter.ac.uk/revision-guide/home/stroke',
        explanation: `The patient describes symptoms consistent with stroke. He takes warfarin and so is at high risk of bleeding. His CT scan demonstrates a hyperdense region in the right hemisphere with midline shift, which confirms an intracerebral haemorrhage. This rules out the option of Aspirin 300mg because this would worsen his bleed. 
        
        His blood pressure is 189/124 mmHg. Despite him actively bleeding, the guidelines recommend early rapid blood pressure control with IV antihypertensives (such as Isosorbide dinitrate) within 6 hours of symptom onset, before anticoagulation reversal. Slow blood pressure lowering, and neurosurgery referral are unlikely to be quick enough, and IV vitamin K and PCC will come second to antihypertensives. Therefore, both these options are not the best options.
        `,
    }, {
        question: `A 64yo man presents to the ED via ambulance. Four hours earlier, he noticed some speech difficulties and his wife phoned to emergency services. He has a past medical history of hypertension, atrial fibrillation and hypercholesterolaemia and is on regular atorvastatin and ramipril. Previously, he elected not to be anticoagulated for atrial fibrillation. He smokes ten cigarettes per day, drinks alcohol occasionally and is the director of a language school. 
        
        On examination, he has an expressive dysphasia. There is evidence of left-sided hemiplegia, sensory loss, and homonymous hemianopia.
        
        An urgent CT head is organised (the image is shown below) 
        
        What would the most appropriate management?`,
        image: `https://prod-images-static.radiopaedia.org/images/606/5aa4886300892264741eb41ae38742_big_gallery.jpeg`,
        a: "Intravenous thrombolysis and mechanical thrombectomy",
        b: "Mechanical thrombectomy",
        c: "Aspirin 300mg",
        d: "Apixaban",
        correct: "a",
        explanationTitle:"Stroke",
        link: 'https://sites.google.com/exeter.ac.uk/revision-guide/home/stroke',
        explanation: `This patient presents with a higher centre dysfunction (expressive dysphasia), unilateral loss of sensory and motor function (left-sided hemiplegia and sensory loss), and visual disturbance (homonymous hemianopia) within 4.0 hours onset. This patient's symptoms are consistent with a total anterior circulation stroke. 
        
        Furthermore, his CT head shows evidence of occlusion of the proximal anterior circulation demonstrated by the right middle cerebral artery sign. To consolidate this, it would also need to be demonstrated by computed tomographic angiography (CTA) or magnetic resonance angiography (MRA)
        
        However, due to the onset of his symptoms, he is eligible for thrombectomy within 6 hours of symptom onset, together with intravenous thrombolysis (within 4.5 hours). 
        
        This makes IV thrombolysis and mechanical thrombectomy the correct answer. All other options are unsuitable on their own.
        `,
    }, 
    {
        question: `A 54yo man is brought to hospital by ambulance complaining of strange symptoms. On review in the emergency department, he is unable to speak although he is able to follow instruction which have been written down. There is a past medical history of hypertension, and type 2 diabetes.
        
        A blockage of which of the following cerebral arteries most likely caused this man's symptoms?`,
        image: `none`,
        a: "Right anterior cerebral artery",
        b: "Right middle cerebral artery",
        c: "Left middle cerebral artery",
        d: "Left anterior cerebral artery",
        correct: "c",
        explanationTitle:"Stroke",
        link: 'https://sites.google.com/exeter.ac.uk/revision-guide/home/stroke',
        explanation: `This man's symptoms point towards an aphasia. He is unable to speak, he is unable to understand language unless this Is written down in the form of instructions. This is most likely global aphasia, which is a higher order brain dysfunction. Together with his history of hypertension, and type 2 diabetes, it is evident that he might be suffering from a stroke. 
        
        90% of right handed individuals and 60% of left handed individuals have a dominant left hemisphere. Therefore, in the majority of cases, there is dominant left hemisphere. The left middle cerebral artery supplies the dominant hemisphere which contains both Wernicke's and Broca's areas of the cortex (which are responsible for understanding and producing speech). The other vessels, if affected would not cause the patient to become aphasic.
        `,
    }, {
        question: `A 63yo woman is brought into resus drowsy. Soon after admission she begins shaking and requires 4mg IV lorazepam which stops the seizure. This is on a background of poorly controlled hypertension, type 2 diabetes, and fibromyalgia. She is poorly compliant with her medications (ramipril, fluoxetine, paracetamol, and oral morphine syrup) and has no known drug allergies. On examination, she has GCS 9, pinpoint pupils, left sided facial droop, and is noted to have weakness of all four limbs.
        
        Considering her presentation, what is the most likely diagnosis?`,
        image: `none`,
        a: "Fluoxetine overdose",
        b: "Lateral medullary syndrome",
        c: "Opioid overdose",
        d: "Pontine haemorrhage",
        correct: "d",
        explanationTitle:"Stroke",
        link: 'https://sites.google.com/exeter.ac.uk/revision-guide/home/stroke',
        explanation: `This patient is presenting with symptoms consistent with pontine haemorrhage. This is supported by her reduced GCS, seizure activity, and four limb paralysis, and facial droop. The patient has sudden onset of significant, life-threatening symptoms and is likely to, therefore have a large expanding haematoma. 
        
        Although this presentation seems similar to that of opioid overdose, the facial droop should point more towards stroke. Her pinpoint pupils rule out fluoxetine overdose which causes dilated pupils.  Patients also tend to present as agitated, restless, with tachycardia and hypertension instead. 
        
        With lateral medullary syndrome, the patient would have presented with loss of temperature and pain sensation to ipsilateral face and contralateral trunk and limbs, with slurring of speech, and ataxic gait. Prognosis is poor for this patient – overall mortality for pontine haemorrhage is 30-90% depending on the rate of reduction in GCS and significance of symptoms at onset.
        `,

    },

], [
    {
        question: `An 87yo woman presents to the ED with profuse sweating and palpitations. The symptoms started two hours ago and do not seem to improve. She has a past medical history of type two diabetes mellitus and osteoporosis.
        
        Her heart rate is 133/min and regular, respiratory rate 21/min, blood pressure 140/92 mmHg and temperature 36.8. On examination, she looks pale and short of breath but is normal for the rest. 
        
        What is the most likely diagnosis?`,
        image: `none`,
        a: "Atrial fibrillation",
        b: "Myocardial infarction",
        c: "Ruptured aortic aneurysm",
        d: "Pancreatitis",
        correct: "b",
        explanationTitle:"Acute coronary syndrome",
        link: 'https://sites.google.com/exeter.ac.uk/revision-guide/home/acute-coronary-syndrome',
        explanation: `This patient presents with symptoms of sweating, palpitations, shortness of breath, tachycardia and tachypnoea which are all consistent with myocardial infarction, even if the patient does not complain of chest pain. Elderly patients might not present with the classical features of myocardial infarction (MI). Even more importantly, diabetic patients (as this one) and women are less likely to experience the classical chest pain accompanying myocardial infarctions. Hence, you should always keep it in mind as a differential for each patient presenting with non-specific symptoms.`,
    },
    {
        question: `You are a junior doctor working a night shift in the ED of a district general hospital. A 58yo man is brought in via ambulance complaining of chest pain and shortness of breath. This is on a background of hypertension, hypercholesterolaemia, atrial fibrillation for which he takes warfarin. You perform an A-E assessment and find that his airway is patent, he has respiratory rate 22 breaths/min, with equal chest expansion, he has pulse 110bpm, and BP of 100/70 mmHg. He is alert with normal blood glucose and is apyrexial. 
        
        An ECG is performed, and this is shown below.
        
        The nearest PCI centre is 3 hours away, what will he receive as part of his definitive management?`,
        image: `https://litfl.com/wp-content/uploads/2018/08/ECG-Anterolateral-AMI-STEMI-2.jpg`,
        a: "Low dose Aspirin",
        b: "Fondaparinux",
        c: "Morphine",
        d: "Prasugrel",
        correct: "b",
        explanationTitle:"Acute coronary syndrome",
        link: 'https://sites.google.com/exeter.ac.uk/revision-guide/home/acute-coronary-syndrome',
        explanation: `This man's symptoms are consistent with acute coronary syndrome. His ECG shows evidence of ST-segment elevation in the anterior chest leads. However, the nearest PCI centre is > 2 hours away. Therefore, the most appropriate definitive management is Fibrinolysis. 
        
        He is unlikely to receive low dose Aspirin (75mg) since this dose has no role in the acute management of MI. It is used for primary and secondary prevention. 300mg is the Aspirin dose used in STEMI management. 
        
        Although Morphine might be used in the initial management, it isn't part of the definitive management. 
        
        He is unlikely to receive Prasugrel as part of his definitive management, since he currently takes Warfarin which puts him at increased risk of bleeding. He is more likely to receive Clopidogrel instead. 
        
        Therefore, the single best answer is Fondaparinux (an antithrombin which is given at the same time as Fibrinolysis).
        `,
    },
    {
        question: `An 81yo woman developed epigastric pain, nausea, vomiting, and shortness of breath, 6 hours ago whilst watching television and having dinner. She has a past medical history of osteoarthritis. Her daughter called 111, an ambulance arrived and assessed her. On examination her pulse was 112/min, respiratory rate 19/min, SpO2 95%, and blood pressure 108/72 mmHg. She was blue lighted to the University hospital where you work.
        
        You order serial troponins, and perform an ECG was performed, which is shown below.
        
        What is the most definitive management plan for this woman?`,
        image: `https://litfl.com/wp-content/uploads/2018/08/ECG-Anterior-STEMI-evolving.jpg.webp`,
        a: "Refer for PCI",
        b: "Perform Fibrinolysis", 
        c: "Give her Ticagrelor",
        d: "Oxygen therapy",
        correct: "a",
        explanationTitle:"Acute coronary syndrome",
        link: 'https://sites.google.com/exeter.ac.uk/revision-guide/home/acute-coronary-syndrome',
        explanation: `This patient presents with symptoms that are atypical for MI. However, sometimes MIs present atypically in women, which can result in the diagnosis being missed, and life threatening consequences for the patient. 
        
        The ECG confirms the diagnosis of ST elevation myocardial infarction. This means that only managing her with ticagrelor would be inappropriate. 
        
        University teaching hospitals typically have access to a Cath lab within 2 hours of presentation. Therefore, performing fibrinolysis would also be inappropriate. 
        
        She doesn't need oxygen therapy, as her oxygen saturations are within the normal range (94-98%). Since she is eligible for PCI and has presented to a teaching hospital large enough to deliver it, this would be the single best answer.
        `,
    },
    {
        question: `A 60yo man presents to the ED with dull central chest pain, present for two hours since waking up. He also noticed some swelling in his ankles in the past few days. This is on a background of osteoarthritis, acute myocardial infarction two years ago, type 2 diabetes mellitus, and a left lower leg amputation.
        
        On examination, he has bi-basal crackles, you think you hear gallop sounds, and he has pitting oedema to ankles.
        
        An ECG is performed, which is shown below.
        
        What is the most likely diagnosis?`,
        image: `https://litfl.com/wp-content/uploads/2018/08/ECG-Ventricular-Aneurysm.jpg.webp`,
        a: "Left ventricular free wall rupture",
        b: "Mitral valve prolapse",
        c: "Ventricular septal defect",
        d: "Left ventricular aneurysm",
        correct: "d",
        explanationTitle:"Acute coronary syndrome",
        link: 'https://sites.google.com/exeter.ac.uk/revision-guide/home/acute-coronary-syndrome',
        explanation: `This patient has developed chest pain and pitting ankle oedema in the setting of a history of myocardial infarction. Furthermore, on examination you hear gallop sounds.
        
        S3 is caused by blood entering the ventricles during early ventricular filling after S2. It typically occurs as a result of blood sloshing around in a larger ventricle than normal. S4 is caused when the atria contract pushing blood against a non-compliant stiffer ventricle before S1.
        
        In combination both suggest he has a stiff and larger than normal ventricle.
        
        Finally, his ECG demonstrates anterior ST elevation without reciprocal depression and deep and well-formed Q waves. These all favour a diagnosis of a left ventricular aneurysm. A T-wave/QRS ratio of less than 0.36 in all precordial leads is more suggestive of a left ventricular aneurysm.
        `,

    },

], [
    {
        question: `A 75yo man is moved to resus in extremis after initially having been admitted with coughs, breathlessness left sided chest pain and haemoptysis. Whilst in resus, he goes into cardiac arrest and a crash call is put out. 
        
        There is no pulse present, one nurse starts chest compression, whilst your colleague applies bag-valve mask (BVM), and you put the defibrillator pads onto the chest. BVM is removed, and you analyse the ECG at the first rhythm check (which is provided below). 
        
        Which of the following will form part of the management plan?
        `,
        image: `https://ars.els-cdn.com/content/image/1-s2.0-S0735675710004092-gr1_lrg.jpg`,
        a: "1mg Adrenaline after the 3rd shock",
        b: "300mg Amiodarone",
        c: "Pericardiocentesis",
        d: "IV thrombolysis",
        correct: "d",
        explanationTitle:"Adult advanced life support",
        link: 'https://sites.google.com/exeter.ac.uk/revision-guide/home/pulmonary-embolism',
        explanation: `The patient presents with symptoms consistent with PE. He then goes into cardiac arrest, and his first rhythm check reveals sinus tachycardia, however he lacks a pulse. According to the ALS guidelines, pulseless electrical activity (PEA) represents a non-shockable rhythm. 
        
        Therefore, 1mg Adrenaline after the 3rd shock, and 300mg Amiodarone would be inappropriate. Instead, the patient should receive 1mg adrenaline immediately, followed by chest compressions. 
        
        The cause of PEA could be cardiac tamponade or PE. In cardiac tamponade, pericardial fluid can obstruct end-diastolic filling. Whereas in obstructive PE, there is insufficient venous return from the lungs to the left ventricles. As a result, whilst the conduction system of the heart is functioning well, the heart is not pumping out any blood, and therefore there is absent pulse. Since, this patient has PE, IV thrombolysis will most likely form part of his management.
        `,
    },
    {
        question: `A 41-year-old woman with a history of chronic kidney disease stage 4 is admitted to the ED with breathlessness. She complains of sharp pain in the right side of his chest and is visibly breathless at rest. On examination, JVP is elevated, his heart rate is 119 bpm, blood pressure is 108/67 mmHg, oxygen saturation is 91% on air, and temperature is 37.8. Examination of his chest is normal. 

        Blood tests are performed, and the results are shown below:
        Hb 141 g/l     (>135)
        Platelets 356 * 10^9/l     (150-400)
        WBC 6.9 * 10^9/l     (4.0-11.0)
        Urea 8.8 mmol/l     (2.0-7.0)
        Creatinine 284 µmol/l     (55-120)
        CRP 5 mg/l     (< 5)
        
        You request a chest X ray, which is shown below.
        
        What is the most appropriate investigation to perform next?`,
        image: `https://prod-images-static.radiopaedia.org/images/2089213/f12063879a29e672f675977fabdc89_big_gallery.jpeg`,
        a: "CT pulmonary angiogram",
        b: "Echocardiogram",
        c: "High-resolution CT chest",
        d: "V/Q scan",
        correct: "d",
        explanationTitle:"Pulmonary Embolism",
        link: 'https://sites.google.com/exeter.ac.uk/revision-guide/home/pulmonary-embolism',
        explanation: `This woman has oxygen saturations of 91% on air, is tachycardic and presents with pleuritic chest pain with a normal examination finds. This makes pulmonary embolism (PE) likely. 
        
        Her Well's Score is 4.5 (tachycardia = 1.5, no other diagnosis = 3) indicating a higher likelihood of PE and need for diagnostic imaging. However, she has significant renal impairment, therefore CTPA is contra-indicated since it delivers iodine-based contrast which would place her at risk of contrast-induced nephropathy and ATN. 
        
        Therefore, the correct option is V/Q scan, since it uses small doses of inhaled then injected radio-nucleotides. The dose of radiation dose from this is still lower compared to CT imaging.
        `,
    },
    {
        question: `Mary is a 62-year-old woman who suddenly started coughing up blood and became short of breath. This is on a background of hypertension, antiphospholipid syndrome, a recent diagnosis of lymphoma, arthritis affecting both her knees, her left elbow, and she required a left knee replacement 2 weeks ago.
        
        On examination, her pulse is 107/min, respiratory rate is 21/min, oxygen saturation is 98% on air, and blood pressure is 123/81 mmHg, her examination findings are otherwise normal.
        
        Blood tests are performed:
        Hb 129 g/l     (>125)
        Platelets 325 * 10^9/l     (150-400)
        WBC 6.9 * 10^9/l     (4.0-11.0)
        Urea 8.4 mmol/l     (2.0-7.0)
        Creatinine 345 µmol/l     (55-120)
        CRP 4 mg/l     (< 5)
        
        CTPA is performed and shown below.
        
        What is most appropriate management for Mary?`,
        image: `https://prod-images-static.radiopaedia.org/images/24453/bbf1a6c774b4ae5f2d093468f2c7b9_big_gallery.jpeg`,
        a: "Warfarin",
        b: "An inferior vena cava filter", 
        c: "Low molecular weight heparin followed by warfarin",
        d: "Apixaban",
        correct: "c",
        explanationTitle:"Pulmonary Embolism",
        link: 'https://sites.google.com/exeter.ac.uk/revision-guide/home/pulmonary-embolism',
        explanation: `The patient has symptoms of shortness of breath, and haemoptysis consistent with pulmonary embolism. Her Well's score is at least 5.0 (haemoptysis = 1, recent malignancy = 1, recent surgery = 1.5 tachycardia = 1.5). 
        
        She has a high likelihood of PE. Her CTPA confirms a saddle embolus. Therefore, she should be managed with anticoagulation. 
        
        However, since she suffer with antiphospholipid syndrome, apixaban is contra-indicated. A safer option would be warfarin preceded by low molecular weight heparin. 
        
        Warfarin alone would be inappropriate. Since, initially, it inhibits the anticoagulant Protein C and S resulting in a procoagulant state, then it later inhibits factors 10, 9, 7, and 2 resulting in anticoagulation. However, the initial procoagulant state could be dangerous in some already suffering with a PE. 
        
        An inferior vena cava filter is only indicated with repeated VTE.
        `,
    },
    {
        question: `A 39-year-old woman presents to the emergency department short of breath with left-sided pleuritic chest pain. She is previously fit and well and does not see her GP regularly. She hasn’t had recent surgery, has one child aged 8yo, and is not currently taking contraception.
        
        On examination her heart rate is 105 beats per minute and regular, her chest sounds clear. Her calves are both soft and non-tender. Her blood pressure is 98/67 mmHg.
        
        An ECG is performed and shown below.
        
        A CT pulmonary angiogram shows a left-sided pulmonary embolism (PE).
        
        Which of the following management options is correct?`,
        image: `https://litfl.com/wp-content/uploads/2018/08/ECG-bilateral-PE.jpeg`,
        a: "An urgent open pulmonary embolectomy",
        b: "Streptokinase for 24 hours",
        c: "Oral anticoagulation for 3 months",
        d: "Oral anticoagulation for 6 months",
        correct: "d",
        explanationTitle:"Pulmonary Embolism",
        link: 'https://sites.google.com/exeter.ac.uk/revision-guide/home/pulmonary-embolism',
        explanation: `Open pulmonary embolectomies are very rarely performed in modern practice and this patient has no life-threatening adverse features that would necessitate removal of the embolus. 
        
        She does not need thrombolysis since she doesn’t have features of obstructive shock. She has a blood pressure > 90/60 mmHg, she has no symptoms of shock, and her ECG shows no signs of right heart strain. 
        
        She does not need a 3 month course of oral anticoagulation. This is the management for a provoked PE. This is when there is an identifiable risk factor for the development of venous-thromboembolism (VTE) within the previous 3 months such as recent surgery, pregnancy, the puerperium (between giving birth and 6 weeks post-partum), lower limb immobility or someone who is taking hormonal contraception or hormone replacement therapy. 
        
        Since there are no identifiable risk factors mentioned in the stem, she had an unprovoked PE, and needs 6 months anticoagulation to cover for any underlying propensity for her blood to clot.
        `,

    },

]];