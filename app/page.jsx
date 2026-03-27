"use client";

import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import {
  CNavbar,
  CPageHeader,
  CButton,
  CCard,
  CInput,
  CSearchBar,
  CSelect,
  CTable,
  CLabel,
  CTitle,
  CCheckbox,
  CRadio,
  CTooltip,
  CSpinner,
  CModal,
  CDatePicker,
  CTreeView,
  CDropdown,
  CAlert,
  CSlider,
  ChartsSection,
} from "@/components/caliente";
import { FiPlus, FiFolder, FiFile, FiInfo, FiCheckCircle, FiAlertTriangle, FiBell } from "react-icons/fi";

// ============================================================
// Showcase Sections
// ============================================================

function ButtonsSection() {
  return (
    <div className="showcase-section">
      <span className="section-title">Buttons</span>
      <CCard title="Button Variants" subtitle="Caliente Casino branded buttons">
        <div className="d-flex flex-wrap gap-2 mb-3">
          <CButton variant="caliente">Primary</CButton>
          <CButton variant="caliente-dark">Dark</CButton>
          <CButton variant="outline-caliente">Outline</CButton>
          <CButton variant="secondary">Secondary</CButton>
          <CButton variant="success">Success</CButton>
          <CButton variant="danger">Danger</CButton>
          <CButton variant="warning">Warning</CButton>
          <CButton variant="info">Info</CButton>
          <CButton variant="light">Light</CButton>
        </div>
        <h6 className="fw-semibold mb-2" style={{ fontSize: "0.8125rem" }}>Sizes</h6>
        <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
          <CButton variant="caliente" size="sm">Small</CButton>
          <CButton variant="caliente">Default</CButton>
          <CButton variant="caliente" size="lg">Large</CButton>
        </div>
        <h6 className="fw-semibold mb-2" style={{ fontSize: "0.8125rem" }}>States</h6>
        <div className="d-flex flex-wrap gap-2 align-items-center">
          <CButton variant="caliente" loading>Loading</CButton>
          <CButton variant="caliente" disabled>Disabled</CButton>
          <CButton variant="caliente" icon={<FiPlus size={16} />}>
            With Icon
          </CButton>
        </div>
      </CCard>

      <CCard title="Action Buttons" subtitle="Icon buttons for common actions: search, delete, update, download, upload, save">
        <h6 className="fw-semibold mb-2" style={{ fontSize: "0.8125rem" }}>Default Size - With Labels</h6>
        <div className="d-flex flex-wrap gap-2 mb-4">
          <CButton action="search" />
          <CButton action="delete" />
          <CButton action="update" />
          <CButton action="download" />
          <CButton action="upload" />
          <CButton action="save" />
        </div>

        <h6 className="fw-semibold mb-2" style={{ fontSize: "0.8125rem" }}>Icon Only (no label)</h6>
        <div className="d-flex flex-wrap gap-2 mb-4">
          <CButton action="search" iconOnly />
          <CButton action="delete" iconOnly />
          <CButton action="update" iconOnly />
          <CButton action="download" iconOnly />
          <CButton action="upload" iconOnly />
          <CButton action="save" iconOnly />
        </div>

        <h6 className="fw-semibold mb-2" style={{ fontSize: "0.8125rem" }}>Small Size</h6>
        <div className="d-flex flex-wrap gap-2 mb-4">
          <CButton action="search" size="sm" />
          <CButton action="delete" size="sm" />
          <CButton action="update" size="sm" />
          <CButton action="download" size="sm" />
          <CButton action="upload" size="sm" />
          <CButton action="save" size="sm" />
        </div>

        <h6 className="fw-semibold mb-2" style={{ fontSize: "0.8125rem" }}>Large Size</h6>
        <div className="d-flex flex-wrap gap-2 mb-4">
          <CButton action="search" size="lg" />
          <CButton action="delete" size="lg" />
          <CButton action="update" size="lg" />
          <CButton action="download" size="lg" />
          <CButton action="upload" size="lg" />
          <CButton action="save" size="lg" />
        </div>

        <h6 className="fw-semibold mb-2" style={{ fontSize: "0.8125rem" }}>Custom Labels</h6>
        <div className="d-flex flex-wrap gap-2 mb-4">
          <CButton action="search">Find Player</CButton>
          <CButton action="delete">Remove Game</CButton>
          <CButton action="update">Edit Profile</CButton>
          <CButton action="download">Export CSV</CButton>
          <CButton action="upload">Import Data</CButton>
          <CButton action="save">Save Changes</CButton>
        </div>

        <h6 className="fw-semibold mb-2" style={{ fontSize: "0.8125rem" }}>Small Icon Only</h6>
        <div className="d-flex flex-wrap gap-2 mb-4">
          <CButton action="search" size="sm" iconOnly />
          <CButton action="delete" size="sm" iconOnly />
          <CButton action="update" size="sm" iconOnly />
          <CButton action="download" size="sm" iconOnly />
          <CButton action="upload" size="sm" iconOnly />
          <CButton action="save" size="sm" iconOnly />
        </div>

        <h6 className="fw-semibold mb-2" style={{ fontSize: "0.8125rem" }}>Disabled State</h6>
        <div className="d-flex flex-wrap gap-2 mb-4">
          <CButton action="search" disabled />
          <CButton action="delete" disabled />
          <CButton action="update" disabled />
          <CButton action="download" disabled />
          <CButton action="upload" disabled />
          <CButton action="save" disabled />
        </div>

        <h6 className="fw-semibold mb-2" style={{ fontSize: "0.8125rem" }}>Using as variant prop</h6>
        <div className="d-flex flex-wrap gap-2">
          <CButton variant="action-search">Search</CButton>
          <CButton variant="action-delete">Delete</CButton>
          <CButton variant="action-update">Update</CButton>
          <CButton variant="action-download">Download</CButton>
          <CButton variant="action-upload">Upload</CButton>
          <CButton variant="action-save">Save</CButton>
        </div>
      </CCard>
    </div>
  );
}

function CardsSection() {
  return (
    <div className="showcase-section">
      <span className="section-title">Cards</span>
      <Row>
        <Col md={4}>
          <CCard title="Casino Revenue" subtitle="Monthly stats">
            <h3 className="fw-bold mb-1" style={{ color: "#C8102E" }}>$1,245,890</h3>
            <small className="text-success fw-medium">+12.5% from last month</small>
          </CCard>
        </Col>
        <Col md={4}>
          <CCard title="Active Players" headerAction={<CLabel variant="success" pill>Live</CLabel>}>
            <h3 className="fw-bold mb-1">8,432</h3>
            <small className="text-muted">Currently online</small>
          </CCard>
        </Col>
        <Col md={4}>
          <CCard
            title="Jackpot Pool"
            footer={<small className="text-muted">Updated every 30 seconds</small>}
          >
            <h3 className="fw-bold mb-1" style={{ color: "#C8102E" }}>$892,156</h3>
            <div className="progress mt-2" style={{ height: "6px" }}>
              <div className="progress-bar" style={{ width: "68%", backgroundColor: "#C8102E" }} />
            </div>
          </CCard>
        </Col>
      </Row>
    </div>
  );
}

function FormsSection() {
  const [selectVal, setSelectVal] = useState("");
  const [date, setDate] = useState(null);
  const [checks, setChecks] = useState({ slots: true, poker: false, blackjack: true, roulette: false });
  const [radioVal, setRadioVal] = useState("vip");

  return (
    <div className="showcase-section">
      <span className="section-title">Form Controls</span>
      <Row>
        <Col lg={6}>
          <CCard title="Inputs">
            <CInput label="Player Name" placeholder="Enter player name..." required />
            <CInput label="Email" type="email" placeholder="player@caliente.mx" helpText="We will never share your email." />
            <CInput label="Password" type="password" placeholder="Enter password" />
            <CInput label="Invalid Field" value="wrong-value" error="This field has an error" onChange={() => {}} />
            <CInput label="Disabled" value="Cannot edit" disabled />
          </CCard>
        </Col>
        <Col lg={6}>
          <CCard title="Selects & Date Picker">
            <CSelect
              label="Game Type"
              value={selectVal}
              onChange={(e) => setSelectVal(e.target.value)}
              options={[
                { value: "slots", label: "Slots" },
                { value: "poker", label: "Poker" },
                { value: "blackjack", label: "Blackjack" },
                { value: "roulette", label: "Roulette" },
                { value: "baccarat", label: "Baccarat" },
              ]}
              required
            />
            <CSelect
              label="VIP Level"
              options={[
                { value: "silver", label: "Silver" },
                { value: "gold", label: "Gold" },
                { value: "platinum", label: "Platinum" },
                { value: "diamond", label: "Diamond" },
              ]}
              size="sm"
            />
            <CDatePicker
              label="Reservation Date"
              value={date}
              onChange={setDate}
              required
            />
          </CCard>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <CCard title="Checkboxes">
            <CCheckbox label="Slots" checked={checks.slots} onChange={(v) => setChecks({ ...checks, slots: v })} />
            <CCheckbox label="Poker" checked={checks.poker} onChange={(v) => setChecks({ ...checks, poker: v })} />
            <CCheckbox label="Blackjack" checked={checks.blackjack} onChange={(v) => setChecks({ ...checks, blackjack: v })} />
            <CCheckbox label="Roulette (Disabled)" checked={checks.roulette} disabled />
          </CCard>
        </Col>
        <Col lg={6}>
          <CCard title="Radio Buttons">
            <CRadio
              name="membership"
              label="Membership Tier"
              value={radioVal}
              onChange={setRadioVal}
              options={[
                { value: "standard", label: "Standard" },
                { value: "vip", label: "VIP" },
                { value: "premium", label: "Premium" },
                { value: "disabled", label: "Ultra (Coming Soon)", disabled: true },
              ]}
            />
            <hr />
            <CRadio
              name="layout"
              label="Display (Inline)"
              value="grid"
              onChange={() => {}}
              inline
              options={[
                { value: "grid", label: "Grid View" },
                { value: "list", label: "List View" },
                { value: "table", label: "Table View" },
              ]}
            />
          </CCard>
        </Col>
      </Row>
    </div>
  );
}

function SearchBarSection() {
  return (
    <div className="showcase-section">
      <span className="section-title">Search Bar</span>
      <CCard title="Search" subtitle="Search across casino games, players, and transactions">
        <CSearchBar placeholder="Search games, players, tables..." onSearch={(q) => alert(`Searching: ${q}`)} />
        <div className="mt-3">
          <CSearchBar placeholder="Small search..." size="sm" />
        </div>
      </CCard>
    </div>
  );
}

function TableSection() {
  const columns = [
    { key: "id", header: "#" },
    { key: "name", header: "Player" },
    { key: "game", header: "Game" },
    { key: "bet", header: "Bet Amount" },
    {
      key: "status",
      header: "Status",
      render: (row) => {
        const colors = { Active: "success", Inactive: "secondary", Suspended: "danger" };
        return <CLabel variant={colors[row.status] || "secondary"} pill>{row.status}</CLabel>;
      },
    },
    { key: "winnings", header: "Winnings" },
  ];

  const data = [
    { id: "1001", name: "Carlos Mendez", game: "Blackjack", bet: "$500", status: "Active", winnings: "$1,250" },
    { id: "1002", name: "Maria Garcia", game: "Poker", bet: "$1,000", status: "Active", winnings: "$3,480" },
    { id: "1003", name: "Juan Rodriguez", game: "Roulette", bet: "$200", status: "Inactive", winnings: "$0" },
    { id: "1004", name: "Ana Lopez", game: "Slots", bet: "$50", status: "Active", winnings: "$890" },
    { id: "1005", name: "Pedro Sanchez", game: "Baccarat", bet: "$2,000", status: "Suspended", winnings: "-$500" },
    { id: "1006", name: "Sofia Torres", game: "Blackjack", bet: "$750", status: "Active", winnings: "$2,100" },
    { id: "1007", name: "Diego Ramirez", game: "Poker", bet: "$1,500", status: "Active", winnings: "$4,200" },
    { id: "1008", name: "Lucia Herrera", game: "Slots", bet: "$100", status: "Active", winnings: "$350" },
    { id: "1009", name: "Fernando Cruz", game: "Roulette", bet: "$800", status: "Inactive", winnings: "$150" },
    { id: "1010", name: "Isabella Morales", game: "Baccarat", bet: "$3,000", status: "Active", winnings: "$5,600" },
    { id: "1011", name: "Roberto Diaz", game: "Poker", bet: "$600", status: "Suspended", winnings: "-$200" },
    { id: "1012", name: "Carmen Ruiz", game: "Blackjack", bet: "$400", status: "Active", winnings: "$920" },
    { id: "1013", name: "Alejandro Vega", game: "Slots", bet: "$25", status: "Active", winnings: "$75" },
    { id: "1014", name: "Patricia Flores", game: "Roulette", bet: "$1,200", status: "Active", winnings: "$2,800" },
    { id: "1015", name: "Miguel Castillo", game: "Baccarat", bet: "$5,000", status: "Active", winnings: "$8,900" },
    { id: "1016", name: "Elena Reyes", game: "Poker", bet: "$900", status: "Inactive", winnings: "$0" },
    { id: "1017", name: "Andres Gutierrez", game: "Blackjack", bet: "$350", status: "Active", winnings: "$700" },
    { id: "1018", name: "Valentina Ortiz", game: "Slots", bet: "$150", status: "Active", winnings: "$1,100" },
  ];

  return (
    <div className="showcase-section">
      <span className="section-title">Tables</span>
      <CCard title="Player Activity" subtitle="Recent gaming sessions with sorting, search, and pagination" noPadding>
        <CTable
          columns={columns}
          data={data}
          striped
          sortable
          searchable
          searchPlaceholder="Search players, games..."
          paginated
          pageSize={5}
          pageSizeOptions={[5, 10, 25]}
        />
      </CCard>
    </div>
  );
}

function LabelsSection() {
  return (
    <div className="showcase-section">
      <span className="section-title">Labels / Badges</span>
      <CCard title="Labels & Badges">
        <div className="d-flex flex-wrap gap-2 mb-3">
          <CLabel variant="caliente">Caliente</CLabel>
          <CLabel variant="primary">Primary</CLabel>
          <CLabel variant="secondary">Secondary</CLabel>
          <CLabel variant="success">Success</CLabel>
          <CLabel variant="danger">Danger</CLabel>
          <CLabel variant="warning">Warning</CLabel>
          <CLabel variant="info">Info</CLabel>
          <CLabel variant="dark">Dark</CLabel>
        </div>
        <h6 className="fw-semibold mb-2" style={{ fontSize: "0.8125rem" }}>Pill Badges</h6>
        <div className="d-flex flex-wrap gap-2 mb-3">
          <CLabel variant="caliente" pill>VIP</CLabel>
          <CLabel variant="success" pill>Online</CLabel>
          <CLabel variant="danger" pill>Hot</CLabel>
          <CLabel variant="info" pill>New</CLabel>
        </div>
        <h6 className="fw-semibold mb-2" style={{ fontSize: "0.8125rem" }}>Sizes</h6>
        <div className="d-flex flex-wrap gap-2 align-items-center">
          <CLabel variant="caliente" size="sm">Small</CLabel>
          <CLabel variant="caliente" size="md">Medium</CLabel>
          <CLabel variant="caliente" size="lg">Large</CLabel>
        </div>
      </CCard>
    </div>
  );
}

function TitlesSection() {
  return (
    <div className="showcase-section">
      <span className="section-title">Titles & Headers</span>
      <CCard title="Title Levels">
        <CTitle level={1}>Heading 1 - Casino Dashboard</CTitle>
        <CTitle level={2}>Heading 2 - Player Management</CTitle>
        <CTitle level={3} subtitle="Supporting description text">Heading 3 - Game Reports</CTitle>
        <CTitle level={4} accent>Heading 4 - With Accent</CTitle>
        <CTitle level={5}>Heading 5 - Settings</CTitle>
        <CTitle level={6}>Heading 6 - Fine Print</CTitle>
      </CCard>
    </div>
  );
}

function TooltipsSection() {
  return (
    <div className="showcase-section">
      <span className="section-title">Tooltips</span>
      <CCard title="Tooltips">
        <div className="d-flex flex-wrap gap-3">
          <CTooltip content="Top tooltip content" placement="top">
            <CButton variant="outline-caliente" size="sm">Hover Top</CButton>
          </CTooltip>
          <CTooltip content="Right tooltip content" placement="right">
            <CButton variant="outline-caliente" size="sm">Hover Right</CButton>
          </CTooltip>
          <CTooltip content="Bottom tooltip content" placement="bottom">
            <CButton variant="outline-caliente" size="sm">Hover Bottom</CButton>
          </CTooltip>
          <CTooltip content="Left tooltip content" placement="left">
            <CButton variant="outline-caliente" size="sm">Hover Left</CButton>
          </CTooltip>
        </div>
      </CCard>
    </div>
  );
}

function SpinnersSection() {
  return (
    <div className="showcase-section">
      <span className="section-title">Spinners</span>
      <CCard title="Standard Spinners" subtitle="Bootstrap border and grow variants">
        <div className="d-flex flex-wrap gap-4 align-items-start">
          <CSpinner size="sm" label="Small" />
          <CSpinner size="md" label="Default" />
          <CSpinner size="lg" label="Large" />
          <CSpinner variant="grow" label="Growing..." />
          <CSpinner color="secondary" label="Secondary" />
        </div>
      </CCard>
      <CCard title="Casino Chip Spinner" subtitle="Custom SVG casino chip with Caliente horse logo, spinning animation and glow pulse">
        <h6 className="fw-semibold mb-3" style={{ fontSize: "0.8125rem" }}>Sizes</h6>
        <div className="d-flex flex-wrap gap-5 align-items-end mb-4">
          <CSpinner variant="chip" size="sm" label="Small" />
          <CSpinner variant="chip" size="md" label="Default" />
          <CSpinner variant="chip" size="lg" label="Large" />
        </div>
        <h6 className="fw-semibold mb-3" style={{ fontSize: "0.8125rem" }}>Custom Labels</h6>
        <div className="d-flex flex-wrap gap-5 align-items-end mb-4">
          <CSpinner variant="chip" size="md" label="Placing bets..." />
          <CSpinner variant="chip" size="md" label="Shuffling deck..." />
          <CSpinner variant="chip" size="md" label="Spinning wheel..." />
        </div>
        <h6 className="fw-semibold mb-3" style={{ fontSize: "0.8125rem" }}>No Label</h6>
        <div className="d-flex flex-wrap gap-5 align-items-end">
          <CSpinner variant="chip" size="sm" label="" />
          <CSpinner variant="chip" size="md" label="" />
          <CSpinner variant="chip" size="lg" label="" />
        </div>
      </CCard>
    </div>
  );
}

function ModalsSection() {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);

  return (
    <div className="showcase-section">
      <span className="section-title">Modals</span>
      <CCard title="Modal Dialogs">
        <div className="d-flex gap-2">
          <CButton variant="caliente" onClick={() => setModal1(true)}>
            Default Modal
          </CButton>
          <CButton variant="caliente-dark" onClick={() => setModal2(true)}>
            Large Modal
          </CButton>
        </div>

        <CModal isOpen={modal1} toggle={() => setModal1(false)} title="Welcome to Caliente">
          <p>This is a standard Caliente Casino modal dialog. Use it for confirmations, forms, or important notifications.</p>
          <CInput label="Player ID" placeholder="Enter your ID..." />
        </CModal>

        <CModal
          isOpen={modal2}
          toggle={() => setModal2(false)}
          title="Game History"
          size="lg"
          footer={
            <div className="d-flex gap-2">
              <CButton variant="light" onClick={() => setModal2(false)}>Cancel</CButton>
              <CButton variant="caliente" onClick={() => setModal2(false)}>Confirm</CButton>
            </div>
          }
        >
          <p className="text-muted mb-3">Review your recent gaming history and transactions.</p>
          <div className="table-responsive">
            <table className="table table-sm mb-0">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Game</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Mar 1, 2026</td><td>Blackjack</td><td className="text-success">+$250</td></tr>
                <tr><td>Feb 28, 2026</td><td>Poker</td><td className="text-danger">-$100</td></tr>
                <tr><td>Feb 27, 2026</td><td>Slots</td><td className="text-success">+$50</td></tr>
              </tbody>
            </table>
          </div>
        </CModal>
      </CCard>
    </div>
  );
}

function TreeViewSection() {
  const FolderIcon = () => <FiFolder size={14} />;
  const FileIcon = () => <FiFile size={14} />;

  const treeData = [
    {
      id: "1",
      label: "Casino Operations",
      icon: <FolderIcon />,
      children: [
        {
          id: "1-1",
          label: "Table Games",
          icon: <FolderIcon />,
          children: [
            { id: "1-1-1", label: "Blackjack Rules", icon: <FileIcon /> },
            { id: "1-1-2", label: "Poker Variants", icon: <FileIcon /> },
            { id: "1-1-3", label: "Roulette Config", icon: <FileIcon /> },
          ],
        },
        {
          id: "1-2",
          label: "Slot Machines",
          icon: <FolderIcon />,
          children: [
            { id: "1-2-1", label: "Progressive Jackpots", icon: <FileIcon /> },
            { id: "1-2-2", label: "Classic Slots", icon: <FileIcon /> },
          ],
        },
        { id: "1-3", label: "Sports Betting", icon: <FolderIcon />, children: [
          { id: "1-3-1", label: "Football", icon: <FileIcon /> },
          { id: "1-3-2", label: "Basketball", icon: <FileIcon /> },
        ]},
      ],
    },
    {
      id: "2",
      label: "Administration",
      icon: <FolderIcon />,
      children: [
        { id: "2-1", label: "User Management", icon: <FileIcon /> },
        { id: "2-2", label: "Reports", icon: <FileIcon /> },
        { id: "2-3", label: "Settings", icon: <FileIcon /> },
      ],
    },
  ];

  return (
    <div className="showcase-section">
      <span className="section-title">Tree View</span>
      <CCard title="Navigation Tree" subtitle="Expandable file/folder structure">
        <CTreeView data={treeData} onSelect={(node) => console.log("Selected:", node.label)} />
      </CCard>
    </div>
  );
}

function DropdownsSection() {
  return (
    <div className="showcase-section">
      <span className="section-title">Dropdowns</span>
      <CCard title="Dropdown Menus">
        <div className="d-flex flex-wrap gap-2">
          <CDropdown
            label="Game Actions"
            variant="caliente"
            options={[
              { label: "Actions", header: true },
              { label: "Start New Game", onClick: () => {} },
              { label: "View History", onClick: () => {} },
              { label: "", divider: true },
              { label: "Settings", onClick: () => {} },
              { label: "Delete Game", onClick: () => {}, disabled: true },
            ]}
          />
          <CDropdown
            label="Reports"
            variant="caliente-dark"
            options={[
              { label: "Daily Report", onClick: () => {} },
              { label: "Weekly Report", onClick: () => {} },
              { label: "Monthly Report", onClick: () => {} },
            ]}
          />
          <CDropdown
            label="Filter"
            variant="outline-caliente"
            size="sm"
            options={[
              { label: "All Games", onClick: () => {} },
              { label: "Active Only", onClick: () => {} },
              { label: "Inactive", onClick: () => {} },
            ]}
          />
        </div>
      </CCard>
    </div>
  );
}

function SlidersSection() {
  const [volume, setVolume] = useState(65);
  const [brightness, setBrightness] = useState(80);
  const [betAmount, setBetAmount] = useState(250);
  const [jackpotContrib, setJackpotContrib] = useState(15);

  return (
    <div className="showcase-section">
      <span className="section-title">Sliders</span>
      <Row>
        <Col lg={6}>
          <CCard title="Percentage Sliders" subtitle="Control values with real-time percentage display">
            <CSlider
              label="Sound Volume"
              value={volume}
              onChange={setVolume}
              min={0}
              max={100}
              helpText="Adjust game sound effects"
            />
            <CSlider
              label="Screen Brightness"
              value={brightness}
              onChange={setBrightness}
              min={0}
              max={100}
              size="lg"
            />
            <CSlider
              label="Jackpot Contribution"
              value={jackpotContrib}
              onChange={setJackpotContrib}
              min={0}
              max={50}
              step={5}
              helpText="Percentage of bet added to jackpot pool"
            />
          </CCard>
        </Col>
        <Col lg={6}>
          <CCard title="Custom Range Sliders" subtitle="Different ranges and step values">
            <CSlider
              label="Bet Amount"
              value={betAmount}
              onChange={setBetAmount}
              min={10}
              max={1000}
              step={10}
              showPercentage={false}
              helpText="Min $10 - Max $1000"
            />
            <CSlider
              label="Small Slider"
              value={50}
              onChange={() => {}}
              size="sm"
            />
            <CSlider
              label="Disabled Slider"
              value={75}
              onChange={() => {}}
              disabled
              helpText="This slider is disabled"
            />
          </CCard>
        </Col>
      </Row>
    </div>
  );
}

function AlertsSection() {
  const InfoIcon = () => <FiInfo size={18} />;
  const CheckIcon = () => <FiCheckCircle size={18} />;
  const AlertIcon = () => <FiAlertTriangle size={18} />;

  return (
    <div className="showcase-section">
      <span className="section-title">Alerts</span>
      <CCard title="Alert Messages">
        <CAlert variant="caliente" icon={<InfoIcon />} title="Caliente Alert">
          This is a custom Caliente Casino themed alert with an icon.
        </CAlert>
        <CAlert variant="success" icon={<CheckIcon />} title="Success!">
          Your deposit of $500 has been processed successfully.
        </CAlert>
        <CAlert variant="warning" icon={<AlertIcon />} title="Warning">
          Your account balance is running low. Please deposit funds.
        </CAlert>
        <CAlert variant="danger" dismissible title="Error">
          Unable to process your withdrawal request. Please try again.
        </CAlert>
        <CAlert variant="info" dismissible>
          New games available! Check out our latest slot machines.
        </CAlert>
      </CCard>
    </div>
  );
}

// ============================================================
// Main Page
// ============================================================

export default function ComponentShowcasePage() {
  const navLinks = [
    { label: "Dashboard", href: "#", active: true },
    { label: "Games", children: [
      { label: "Slots", href: "#" },
      { label: "Poker", href: "#" },
      { label: "Blackjack", href: "#" },
      { divider: true, label: "", href: "" },
      { label: "All Games", href: "#" },
    ]},
    { label: "Players", href: "#" },
    { label: "Reports", href: "#" },
    { label: "Settings", href: "#" },
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F8F8F8" }}>
      <CNavbar
        brandLogo="/images/caliente-casino-logo.webp"
        links={navLinks}
        variant="dark"
        rightContent={
          <div className="d-flex gap-2 align-items-center">
            <CButton variant="outline-caliente" size="sm" icon={<FiBell size={14} />}>
              Notifications
            </CButton>
            <div
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: "34px",
                height: "34px",
                backgroundColor: "#C8102E",
                color: "#FFF",
                fontSize: "0.8125rem",
                fontWeight: 600,
              }}
            >
              CA
            </div>
          </div>
        }
      />

      <Container fluid className="px-4 py-3">
        <CPageHeader
          title="Component Library"
          breadcrumbs={[
            { label: "Caliente Casino", href: "#" },
            { label: "UI Components", active: true },
          ]}
          action={<CButton variant="caliente" size="sm">Export Components</CButton>}
        />

        <ChartsSection />
        <SlidersSection />
        <AlertsSection />
        <ButtonsSection />
        <CardsSection />
        <FormsSection />
        <SearchBarSection />
        <TableSection />
        <LabelsSection />
        <TitlesSection />
        <TooltipsSection />
        <SpinnersSection />
        <ModalsSection />
        <DropdownsSection />
        <TreeViewSection />

        <div className="text-center py-4 mt-4" style={{ borderTop: "1px solid #E8E8E8" }}>
          <small className="text-muted">
            Caliente Casino Component Library - Velzon Template Compatible - Built with Bootstrap & Reactstrap
          </small>
        </div>
      </Container>
    </div>
  );
}
