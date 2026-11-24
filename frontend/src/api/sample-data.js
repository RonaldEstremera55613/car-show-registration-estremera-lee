const registrations = [
  {
    id: "reg-001",
    registrationNumber: "CS27-0001",
    registrationDate: "2027-02-10T08:30:00Z",
    participantName: "Juan Dela Cruz",
    contactNumber: "09171234567",
    email: "juan@example.com",
    address: "123 Rizal St., Naga City",
    carMakeModel: "Toyota Supra MK4",
    plateNumber: "ABC 1234",
    registrationType: "Competitor",
    status: "Confirmed",
    registrationFee: 2500,
    amountPaid: 2500,
  },
  {
    id: "reg-002",
    registrationNumber: "CS27-0002",
    registrationDate: "2027-02-10T09:15:00Z",
    participantName: "Maria Santos",
    contactNumber: "09181234567",
    email: "maria@example.com",
    address: "Legazpi City, Albay",
    carMakeModel: "Honda Civic Type R",
    plateNumber: "XYZ 2345",
    registrationType: "Exhibitor",
    status: "Confirmed",
    registrationFee: 1500,
    amountPaid: 1000,
  },
  {
    id: "reg-003",
    registrationNumber: "CS27-0003",
    registrationDate: "2027-02-11T10:00:00Z",
    participantName: "Pedro Reyes",
    contactNumber: "09191234567",
    email: "pedro@example.com",
    address: "Sorsogon City",
    carMakeModel: "Mitsubishi Lancer Evo",
    plateNumber: "DEF 3456",
    registrationType: "Competitor",
    status: "Pending",
    registrationFee: 2500,
    amountPaid: 0,
  },
  {
    id: "reg-004",
    registrationNumber: "CS27-0004",
    registrationDate: "2027-02-11T11:30:00Z",
    participantName: "Ana Garcia",
    contactNumber: "09201234567",
    email: "ana@example.com",
    address: "Daraga, Albay",
    carMakeModel: "Mazda RX-7",
    plateNumber: "GHI 4567",
    registrationType: "VIP",
    status: "Confirmed",
    registrationFee: 5000,
    amountPaid: 5000,
  },
  {
    id: "reg-005",
    registrationNumber: "CS27-0005",
    registrationDate: "2027-02-12T08:45:00Z",
    participantName: "Carlos Mendoza",
    contactNumber: "09211234567",
    email: "carlos@example.com",
    address: "Sorsogon City",
    carMakeModel: "Nissan Skyline GT-R",
    plateNumber: "JKL 5678",
    registrationType: "Competitor",
    status: "CheckedIn",
    registrationFee: 2500,
    amountPaid: 2500,
  },
  {
    id: "reg-006",
    registrationNumber: "CS27-0006",
    registrationDate: "2027-02-12T09:20:00Z",
    participantName: "Sofia Torres",
    contactNumber: "09221234567",
    email: "sofia@example.com",
    address: "Pili, Camarines Sur",
    carMakeModel: "Toyota 86",
    plateNumber: "MNO 6789",
    registrationType: "Exhibitor",
    status: "Pending",
    registrationFee: 1500,
    amountPaid: 500,
  },
  {
    id: "reg-007",
    registrationNumber: "CS27-0007",
    registrationDate: "2027-02-13T10:15:00Z",
    participantName: "Miguel Ramos",
    contactNumber: "09231234567",
    email: "miguel@example.com",
    address: "Naga City",
    carMakeModel: "Subaru WRX STI",
    plateNumber: "PQR 7890",
    registrationType: "Competitor",
    status: "Confirmed",
    registrationFee: 2500,
    amountPaid: 2500,
  },
  {
    id: "reg-008",
    registrationNumber: "CS27-0008",
    registrationDate: "2027-02-13T13:00:00Z",
    participantName: "Isabella Cruz",
    contactNumber: "09241234567",
    email: "isabella@example.com",
    address: "Gubat, Sorsogon",
    carMakeModel: "Honda Civic",
    plateNumber: "STU 8901",
    registrationType: "Exhibitor",
    status: "Cancelled",
    registrationFee: 1500,
    amountPaid: 0,
  },
  {
    id: "reg-009",
    registrationNumber: "CS27-0009",
    registrationDate: "2027-02-14T08:00:00Z",
    participantName: "Daniel Flores",
    contactNumber: "09251234567",
    email: "daniel@example.com",
    address: "Legazpi City, Albay",
    carMakeModel: "Ford Mustang GT",
    plateNumber: "VWX 9012",
    registrationType: "VIP",
    status: "CheckedIn",
    registrationFee: 5000,
    amountPaid: 5000,
  },
  {
    id: "reg-010",
    registrationNumber: "CS27-0010",
    registrationDate: "2027-02-14T09:30:00Z",
    participantName: "Gabriel Lopez",
    contactNumber: "09261234567",
    email: "gabriel@example.com",
    address: "Sorsogon City",
    carMakeModel: "Chevrolet Camaro",
    plateNumber: "YZA 0123",
    registrationType: "Competitor",
    status: "Pending",
    registrationFee: 2500,
    amountPaid: 1000,
  },
  {
    id: "reg-011",
    registrationNumber: "CS27-0011",
    registrationDate: "2027-02-15T10:00:00Z",
    participantName: "Emma Villanueva",
    contactNumber: "09271234567",
    email: "emma@example.com",
    address: "Naga City",
    carMakeModel: "Honda Jazz",
    plateNumber: "BCD 1234",
    registrationType: "Exhibitor",
    status: "Confirmed",
    registrationFee: 1500,
    amountPaid: 1500,
  },
  {
    id: "reg-012",
    registrationNumber: "CS27-0012",
    registrationDate: "2027-02-15T11:15:00Z",
    participantName: "Nathan Castillo",
    contactNumber: "09281234567",
    email: "nathan@example.com",
    address: "Irosin, Sorsogon",
    carMakeModel: "Toyota Fortuner",
    plateNumber: "EFG 2345",
    registrationType: "VIP",
    status: "Confirmed",
    registrationFee: 5000,
    amountPaid: 3000,
  },
  {
    id: "reg-013",
    registrationNumber: "CS27-0013",
    registrationDate: "2027-02-16T08:30:00Z",
    participantName: "Liam Bautista",
    contactNumber: "09291234567",
    email: "liam@example.com",
    address: "Pili, Camarines Sur",
    carMakeModel: "Nissan Silvia S15",
    plateNumber: "HIJ 3456",
    registrationType: "Competitor",
    status: "CheckedIn",
    registrationFee: 2500,
    amountPaid: 2500,
  },
  {
    id: "reg-014",
    registrationNumber: "CS27-0014",
    registrationDate: "2027-02-16T09:45:00Z",
    participantName: "Olivia Fernandez",
    contactNumber: "09301234567",
    email: "olivia@example.com",
    address: "Bulusan, Sorsogon",
    carMakeModel: "Toyota Vios",
    plateNumber: "KLM 4567",
    registrationType: "Exhibitor",
    status: "Cancelled",
    registrationFee: 1500,
    amountPaid: 0,
  },
  {
    id: "reg-015",
    registrationNumber: "CS27-0015",
    registrationDate: "2027-02-17T10:30:00Z",
    participantName: "Ethan Rivera",
    contactNumber: "09311234567",
    email: "ethan@example.com",
    address: "Legazpi City, Albay",
    carMakeModel: "BMW M3",
    plateNumber: "NOP 5678",
    registrationType: "VIP",
    status: "Confirmed",
    registrationFee: 5000,
    amountPaid: 5000,
  },
  {
    id: "reg-016",
    registrationNumber: "CS27-0016",
    registrationDate: "2027-02-17T13:00:00Z",
    participantName: "Chloe Aquino",
    contactNumber: "09321234567",
    email: "chloe@example.com",
    address: "Sorsogon City",
    carMakeModel: "Mitsubishi Montero",
    plateNumber: "QRS 6789",
    registrationType: "Exhibitor",
    status: "Pending",
    registrationFee: 1500,
    amountPaid: 0,
  },
  {
    id: "reg-017",
    registrationNumber: "CS27-0017",
    registrationDate: "2027-02-18T08:15:00Z",
    participantName: "Noah Martinez",
    contactNumber: "09331234567",
    email: "noah@example.com",
    address: "Naga City",
    carMakeModel: "Toyota GR86",
    plateNumber: "TUV 7890",
    registrationType: "Competitor",
    status: "Confirmed",
    registrationFee: 2500,
    amountPaid: 1500,
  },
  {
    id: "reg-018",
    registrationNumber: "CS27-0018",
    registrationDate: "2027-02-18T09:30:00Z",
    participantName: "Mia Hernandez",
    contactNumber: "09341234567",
    email: "mia@example.com",
    address: "Irosin, Sorsogon",
    carMakeModel: "Honda Civic RS",
    plateNumber: "WXY 8901",
    registrationType: "Exhibitor",
    status: "CheckedIn",
    registrationFee: 1500,
    amountPaid: 1500,
  },
  {
    id: "reg-019",
    registrationNumber: "CS27-0019",
    registrationDate: "2027-02-19T10:00:00Z",
    participantName: "Lucas Gonzales",
    contactNumber: "09351234567",
    email: "lucas@example.com",
    address: "Legazpi City, Albay",
    carMakeModel: "Mazda MX-5",
    plateNumber: "ZAB 9012",
    registrationType: "Competitor",
    status: "Pending",
    registrationFee: 2500,
    amountPaid: 500,
  },
  {
    id: "reg-020",
    registrationNumber: "CS27-0020",
    registrationDate: "2027-02-19T11:45:00Z",
    participantName: "Amelia Diaz",
    contactNumber: "09361234567",
    email: "amelia@example.com",
    address: "Sorsogon City",
    carMakeModel: "Mercedes-Benz C-Class",
    plateNumber: "CDE 0123",
    registrationType: "VIP",
    status: "Confirmed",
    registrationFee: 5000,
    amountPaid: 5000,
  },
  {
    id: "reg-021",
    registrationNumber: "CS27-0021",
    registrationDate: "2027-02-20T08:30:00Z",
    participantName: "James Navarro",
    contactNumber: "09371234567",
    email: "james@example.com",
    address: "Naga City",
    carMakeModel: "Toyota Corolla",
    plateNumber: "FGH 1234",
    registrationType: "Exhibitor",
    status: "Cancelled",
    registrationFee: 1500,
    amountPaid: 0,
  },
  {
    id: "reg-022",
    registrationNumber: "CS27-0022",
    registrationDate: "2027-02-20T09:15:00Z",
    participantName: "Sophia Morales",
    contactNumber: "09381234567",
    email: "sophia@example.com",
    address: "Gubat, Sorsogon",
    carMakeModel: "Nissan 370Z",
    plateNumber: "IJK 2345",
    registrationType: "Competitor",
    status: "CheckedIn",
    registrationFee: 2500,
    amountPaid: 2500,
  },
  {
    id: "reg-023",
    registrationNumber: "CS27-0023",
    registrationDate: "2027-02-21T10:00:00Z",
    participantName: "Benjamin Castro",
    contactNumber: "09391234567",
    email: "benjamin@example.com",
    address: "Daraga, Albay",
    carMakeModel: "Ford Ranger",
    plateNumber: "LMN 3456",
    registrationType: "Exhibitor",
    status: "Confirmed",
    registrationFee: 1500,
    amountPaid: 1500,
  },
  {
    id: "reg-024",
    registrationNumber: "CS27-0024",
    registrationDate: "2027-02-21T13:30:00Z",
    participantName: "Charlotte Ramos",
    contactNumber: "09401234567",
    email: "charlotte@example.com",
    address: "Sorsogon City",
    carMakeModel: "Porsche 911",
    plateNumber: "OPQ 4567",
    registrationType: "VIP",
    status: "Confirmed",
    registrationFee: 5000,
    amountPaid: 2500,
  },
  {
    id: "reg-025",
    registrationNumber: "CS27-0025",
    registrationDate: "2027-02-22T08:45:00Z",
    participantName: "Alexander Torres",
    contactNumber: "09411234567",
    email: "alexander@example.com",
    address: "Naga City",
    carMakeModel: "Subaru BRZ",
    plateNumber: "RST 5678",
    registrationType: "Competitor",
    status: "Pending",
    registrationFee: 2500,
    amountPaid: 0,
  },
];

// Calculate payment status automatically.
const addPaymentStatus = (registration) => {
  let paymentStatus = "Unpaid";

  if (registration.amountPaid >= registration.registrationFee) {
    paymentStatus = "Paid";
  } else if (registration.amountPaid > 0) {
    paymentStatus = "Partial";
  }

  return {
    ...registration,
    paymentStatus,
  };
};

const sampleRegistrations = registrations.map(addPaymentStatus);

// Get registrations with search, filters and pagination.
export async function getRegistrations({
  participantName = "",
  type = "",
  status = "",
  page = 1,
  pageSize = 10,
} = {}) {
  let filteredRegistrations = [...sampleRegistrations];

  if (participantName.trim()) {
    const searchTerm = participantName.toLowerCase();

    filteredRegistrations = filteredRegistrations.filter((item) =>
      item.participantName.toLowerCase().includes(searchTerm)
    );
  }

  if (type) {
    filteredRegistrations = filteredRegistrations.filter(
      (item) => item.registrationType === type
    );
  }

  if (status) {
    filteredRegistrations = filteredRegistrations.filter(
      (item) => item.status === status
    );
  }

  const currentPage = Math.max(1, Number(page) || 1);
  const currentPageSize = Math.max(1, Number(pageSize) || 10);

  const totalCount = filteredRegistrations.length;
  const totalPages = Math.ceil(totalCount / currentPageSize);

  const startIndex = (currentPage - 1) * currentPageSize;

  const items = filteredRegistrations.slice(
    startIndex,
    startIndex + currentPageSize
  );

  return {
    items,
    page: currentPage,
    pageSize: currentPageSize,
    totalCount,
    totalPages,
  };
}

// Get dashboard KPI summary.
export async function getSummary() {
  const totalRegistrations = sampleRegistrations.length;

  const totalFees = sampleRegistrations.reduce(
    (total, item) => total + item.registrationFee,
    0
  );

  const totalPayments = sampleRegistrations.reduce(
    (total, item) => total + item.amountPaid,
    0
  );

  return {
    totalRegistrations,

    confirmed: sampleRegistrations.filter(
      (item) => item.status === "Confirmed"
    ).length,

    checkedIn: sampleRegistrations.filter(
      (item) => item.status === "CheckedIn"
    ).length,

    pending: sampleRegistrations.filter(
      (item) => item.status === "Pending"
    ).length,

    cancelled: sampleRegistrations.filter(
      (item) => item.status === "Cancelled"
    ).length,

    totalFees,
    totalPayments,
    uncollectedPayments: totalFees - totalPayments,
  };
}