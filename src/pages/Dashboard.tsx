import {
    Box,
    Card,
    CardContent,
    Chip,
    Container,
    Divider,
    Grid2 as Grid,
    Slider,
    Stack,
    styled,
    Tab,
    Tabs,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

const CustomTabs = styled(Tabs)({
    backgroundColor: "#F5F5F5",
    borderRadius: "50px",
    padding: "4px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    minHeight: "auto",
    width: "100%", // ✅ Make Tabs Full Width
    "& .MuiTabs-indicator": {
        display: "none", // ✅ Remove the underline completely
    },
});

const CustomTab = styled(Tab)({
    textTransform: "none",
    fontWeight: "bold",
    fontFamily: "'Comic Sans MS', cursive",
    borderRadius: "50px",
    minHeight: "auto",
    padding: "6px 16px",
    flex: 1, // ✅ Make each tab take equal space
    transition: "all 0.3s ease-in-out",
    "&.Mui-selected": {
        backgroundColor: "#ffffff",
        color: "#2979ff",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
    },
    "&:not(.Mui-selected):hover": {
        backgroundColor: "rgba(255, 255, 255, 0.4)",
    },
});

export const DashboardContent = () => {
    const [tabValue, setTabValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    return (
        <div>
            <Grid container spacing={2}>
                <Grid size={3}>
                    <Box display={"flex"} flexDirection={"column"} height={'100%'}>
                        <Card variant="outlined" sx={{ maxWidth: 360, borderRadius: 2, boxShadow: 10 }}>
                            <Box sx={{ px: 2, pt: 1, pr: 2, pb: 1 }}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant="body1" component="div">
                                        Your keywords:
                                    </Typography>
                                </Stack>
                            </Box>
                            <Divider sx={{ backgroundColor: '#0A4EB2' }} />

                            <Box px={2} pt={2} >
                                <Box>
                                    <Typography variant="body1" fontWeight={'bold'} component="div">
                                        Education:
                                    </Typography>
                                </Box>
                                <Box>
                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={2}
                                        slotProps={{
                                            input: {
                                                sx: {
                                                    boxShadow: "inset 0px 4px 8px rgba(0, 0, 0, 0.2)", // Inner shadow
                                                    backgroundColor: "#fff",
                                                    borderRadius: "4px", // Optional rounded corners
                                                    padding: "10px", // Adjusting padding for better visibility
                                                },
                                            },
                                        }}
                                    />
                                </Box>
                            </Box>

                            <Box sx={{ p: 2 }} gap={1}>
                                <Box>
                                    <Typography variant="body1" fontWeight={'bold'} component="div">
                                        Your skills
                                    </Typography>
                                </Box>
                                <Box>
                                    <TextField
                                        id="outlined-basic"
                                        fullWidth
                                        slotProps={{
                                            input: {
                                                sx: {
                                                    boxShadow: "inset 0px 2px 6px rgba(0, 0, 0, 0.2)", // Inner shadow
                                                    backgroundColor: "#fff",
                                                    borderRadius: "4px", // Keeps rounded corners subtle
                                                    height: "2.4375em", // Default MUI input height
                                                    // lineHeight: "1.4375em", // Ensures text stays vertically centered
                                                },
                                            },
                                        }}
                                    />
                                </Box>

                                <Box pt={2}>
                                    <Stack direction="row" spacing={1}>
                                        <Chip color="primary" label="Soft" size="small" onDelete={() => { }} />
                                        <Chip color="primary" label="Soft" size="small" onDelete={() => { }} />
                                    </Stack>
                                </Box>
                            </Box>

                            <Box sx={{ p: 2 }} gap={1}>
                                <Box>
                                    <Typography variant="body1" fontWeight={'bold'} component="div">
                                        Interested skills
                                    </Typography>
                                </Box>
                                <Box>
                                    <TextField
                                        id="outlined-basic"
                                        fullWidth
                                        slotProps={{
                                            input: {
                                                sx: {
                                                    boxShadow: "inset 0px 2px 6px rgba(0, 0, 0, 0.2)", // Inner shadow
                                                    backgroundColor: "#fff",
                                                    borderRadius: "4px", // Keeps rounded corners subtle
                                                    height: "2.4375em", // Default MUI input height
                                                    // lineHeight: "1.4375em", // Ensures text stays vertically centered
                                                },
                                            },
                                        }}
                                    />
                                </Box>
                                <Box pt={2}>

                                    <Stack direction="row" flexWrap={'wrap'} spacing={1} rowGap={1}>
                                        <Chip color="primary" label="Soft" size="small" onDelete={() => { }} />
                                        <Chip color="primary" label="Soft" size="small" onDelete={() => { }} />
                                        <Chip color="primary" label="Soft" size="small" onDelete={() => { }} />
                                    </Stack>
                                </Box>
                            </Box>

                            <Box pt={2} px={2}>
                                <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                    <Typography variant="body1" fontWeight={'bold'} component="div">
                                        Time Limit:
                                    </Typography>
                                    <Box>
                                        <Typography variant="body2" component="div">
                                            2 Years
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <Slider
                                        aria-label="Temperature"
                                        defaultValue={6}
                                        valueLabelDisplay="auto"
                                        shiftStep={30}
                                        step={2}
                                        marks
                                        min={2}
                                        max={24}
                                    />
                                </Box>
                            </Box>
                        </Card>
                    </Box>
                </Grid>
                <Grid size={9}>
                    <Box display={"flex"} flexDirection={"column"} gap={1}>
                        <Box sx={{ width: "100%" }}>
                            <CustomTabs value={tabValue} onChange={handleChange} variant="scrollable">
                                <CustomTab label="Course" />
                                <CustomTab label="Books" />
                                <CustomTab label="Certificates" />
                                <CustomTab label="University" />
                            </CustomTabs>
                        </Box>
                        <Box>
                            <Tabs
                                value={tabValue}
                                onChange={handleChange}
                                variant="scrollable"
                                scrollButtons={false}
                                aria-label="scrollable prevent tabs example"
                            >
                                <Tab label="Course" />
                                <Tab label="Books" />
                                <Tab label="Certificates" />
                                <Tab label="Universities" />
                            </Tabs>
                        </Box>
                        <Box>
                            <TabPanel value={tabValue} index={0}>
                                <Card variant="outlined">
                                    <CardContent>Course</CardContent>
                                </Card>
                            </TabPanel>
                            <TabPanel value={tabValue} index={1}>
                                <Card variant="outlined">
                                    <CardContent>Books</CardContent>
                                </Card>
                            </TabPanel>
                            <TabPanel value={tabValue} index={2}>
                                <Card variant="outlined">
                                    <CardContent>Certificates</CardContent>
                                </Card>
                            </TabPanel>
                            <TabPanel value={tabValue} index={3}>
                                <Card variant="outlined">
                                    <CardContent>Universities</CardContent>
                                </Card>
                            </TabPanel>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export const Dashboard = () => {
    return (
        <Container maxWidth="xl">
            <Box mt={2}>
                <DashboardContent />
            </Box>
        </Container>
    );
};
