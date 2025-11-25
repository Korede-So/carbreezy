import React from "react";

export default function FilterBar({
  filter,
  setFilter,
  types,
  onSearch,
  search,
}) {
  return (
    <div
      className="card"
      style={{
        padding: 12,
        background: "#000",
        border: "1px solid #0ff",
        borderRadius: 10,
        marginBottom: 20,
        color: "#fff",
      }}
    >
      <div
        className="filter-row"
        style={{
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
        }}
      >
        <select
          value={filter.type}
          onChange={(e) => setFilter({ ...filter, type: e.target.value })}
          style={styles.select}
        >
          <option value="">All Types</option>
          {types.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <select
          value={filter.condition}
          onChange={(e) => setFilter({ ...filter, condition: e.target.value })}
          style={styles.select}
        >
          <option value="">All</option>
          <option value="New">New</option>
          <option value="Used">Used</option>
        </select>

        <input
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search brand or model"
          style={styles.input}
        />

        <button
          onClick={() => setFilter({ type: "", condition: "" })}
          style={styles.button}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

const styles = {
  select: {
    padding: "8px 12px",
    borderRadius: 8,
    background: "#111",
    border: "1px solid #0ff",
    color: "#fff",
  },
  input: {
    flex: 1,
    padding: "8px 12px",
    borderRadius: 8,
    background: "#111",
    border: "1px solid #0ff",
    color: "#fff",
  },
  button: {
    padding: "8px 16px",
    borderRadius: 8,
    border: "none",
    background: "#e3262f",
    color: "#fff",
    cursor: "pointer",
    fontWeight: 600,
  },
};
