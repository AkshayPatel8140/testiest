import {
    Box,
    Button,
    Card,
    Chip,
    Container,
    Divider,
    Grid2 as Grid,
    IconButton,
    Slider,
    Stack,
    styled,
    Tab,
    Tabs,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import CheckIcon from '@mui/icons-material/Check';
import { Colors } from "../components/Colors.tsx";
import CourseTable from "../components/CourseTable.tsx";
import Certificates from "../components/Certificates.tsx";
import Universities from "../components/Universities.tsx";
import Books from "../components/Books.tsx";

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
            {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
        </div>
    );
}
const CustomButton = styled(IconButton)({
    backgroundColor: Colors.defaultBlue, // Blue color
    color: "#fff",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
    borderRadius: "50%", // Circular button
    width: "30px",
    height: "30px",
    marginLeft: "8px", // Space between input and button
    transition: "all 0.3s ease",
    "&:hover": {
        backgroundColor: "#1565c0", // Slightly darker on hover
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
    },
});

const CustomTabs = styled(Tabs)({
    backgroundColor: "#F5F5F5",
    borderRadius: "50px",
    height: '31px',
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
    const [timeLimit, setTimeLimit] = React.useState(2);
    const [education, setEducation] = useState<string>("");
    const [yourSkillText, setYourSkillText] = useState<string>("");
    const [skillList, setSkillList] = useState<string[]>(['Soft', 'Soft']);
    const [interestedSkillText, setInterestedSkillText] = useState<string>("");
    const [interestedSkill, setInterestedSkillList] = useState<string[]>(['Soft', 'Soft']);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    const onChangeTimeLimit = (data: any) => {
        setTimeLimit(data?.target?.value)
    }

    const handleAddSkill = () => {
        if (yourSkillText.trim()) {
            setSkillList([...skillList, yourSkillText.trim()]);
            setYourSkillText(""); // Clear input after adding
        }
    };
    const handleAddInterestedSkill = () => {
        if (interestedSkillText.trim()) {
            setInterestedSkillList([...interestedSkill, interestedSkillText.trim()]);
            setInterestedSkillText(""); // Clear input after adding
        }
    };

    const onSearch = () => {
        let data = {
            education: education,
            userSkills: skillList,
            interestedSkill: interestedSkill,
            timeLimit: timeLimit
        }
        console.log('data', data)
    }

    return (
        <div>
            <Grid container spacing={2}>
                <Grid size={3}>
                    <Box display={"flex"} flexDirection={"column"} height={'100%'} sx={{ height: '100vh' }}>
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
                                        value={education}
                                        onChange={(e) => { setEducation(e?.target?.value) }}
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
                                <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
                                    <TextField
                                        id="outlined-basic"
                                        fullWidth
                                        value={yourSkillText}
                                        onChange={(e) => setYourSkillText(e.target.value)}
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
                                    <CustomButton onClick={handleAddSkill}>
                                        <CheckIcon />
                                    </CustomButton>
                                </Box>

                                <Box pt={2}>
                                    <Stack direction="row" spacing={1}>
                                        {skillList.map((item, index) => {
                                            return <Chip color="primary" label={item} size="small" onDelete={() => { }} />
                                        })}
                                    </Stack>
                                </Box>
                            </Box>

                            <Box sx={{ p: 2 }} gap={1}>
                                <Box>
                                    <Typography variant="body1" fontWeight={'bold'} component="div">
                                        Interested skills
                                    </Typography>
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
                                    <TextField
                                        id="outlined-basic"
                                        fullWidth
                                        value={interestedSkillText}
                                        onChange={(e) => setInterestedSkillText(e.target.value)}
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
                                    <CustomButton onClick={handleAddInterestedSkill}>
                                        <CheckIcon />
                                    </CustomButton>
                                </Box>
                                <Box pt={2}>

                                    <Stack direction="row" flexWrap={'wrap'} spacing={1} rowGap={1}>
                                        {interestedSkill.map((item, index) => {
                                            return <Chip color="primary" label={item} size="small" onDelete={() => { }} />
                                        })}
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
                                            {timeLimit} Months
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <Slider
                                        aria-label="Temperature"
                                        defaultValue={2}
                                        valueLabelDisplay="auto"
                                        shiftStep={30}
                                        step={2}
                                        marks
                                        min={2}
                                        max={24}
                                        onChange={onChangeTimeLimit}
                                    />
                                </Box>
                                <Box marginY={2}>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        size="large"
                                        sx={{ backgroundColor: '#0A4EB2' }}
                                        onClick={onSearch}
                                    >
                                        Search
                                    </Button>
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
                            <TabPanel value={tabValue} index={0}>
                                <Card variant="outlined">
                                    <CourseTable />
                                </Card>
                            </TabPanel>
                            <TabPanel value={tabValue} index={1}>
                                <Card variant="outlined" sx={{}}>
                                    <Books />
                                </Card>
                            </TabPanel>
                            <TabPanel value={tabValue} index={2}>
                                <Card variant="outlined">
                                    <Certificates />
                                </Card>
                            </TabPanel>
                            <TabPanel value={tabValue} index={3}>
                                <Card variant="outlined">
                                    <Universities />
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
